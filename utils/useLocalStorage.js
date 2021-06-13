import { useState, useEffect } from 'react' 

export function useLocalStorage(key, initialValue) {
    if (typeof window !== undefined) {
        const [storedVal, setStoredVal] = useState(() => {
            try {
                const item = window.localStorage.getItem(key)
                return item ? JSON.parse(item) : initialValue
            }
            catch (error) {
                // console.log(error)
                return initialValue
            }
        })
    
        const setValue = (value) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value
                setStoredVal(valueToStore)
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
            catch (error) {
                // console.log(error)
            }
        }
    
        return [storedVal, setValue]

    }
}