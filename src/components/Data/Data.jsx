import React, { useState, useEffect } from 'react'

export default function Data() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://127.0.0.1:8089/api/v1/categories/`)
            const newData = await response.json()
            setData(newData)
        }

        const interval = setInterval(fetchData, 1000) // Poll every 5 seconds
        return () => clearInterval(interval) // Cleanup on component unmount
    }, [])

    // Render your component using the data state
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
