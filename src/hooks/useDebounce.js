import { useEffect, useState } from 'react'

export default function useDebounce(value , time) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);

        },time);
        return () => {
            clearTimeout(timeout);
        };
    }, [value , time]);
    return debouncedValue;
   
}
