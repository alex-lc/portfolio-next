import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    }))
}

export async function getPostById(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const content = processedContent.toString()

    return {
        id,
        content,
        ...matterResult.data
    }
}

export async function getRecentPosts() {
    const fileNames = fs.readdirSync(postsDirectory)

    const allPosts = fileNames.map(post => {  
        const id = post.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, post)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    const sortedPosts = allPosts.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        }
        else if (a > b) {
            return - 1
        }
        else {
            return 0
        }
    })

    const mostRecent = sortedPosts.slice(0, 5)

    return mostRecent
}