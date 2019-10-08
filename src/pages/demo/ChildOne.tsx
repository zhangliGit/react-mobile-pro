import React, { useState } from 'react'

const setObj = () => {
    return {
        title: 'chentain',
        age: 22
    }
}

export default function (props: object) {
    console.log(props)
    const [count, setCount] = useState({
        title: 'zhangli',
        age: 28
    })
    return (
        <div>
            {count.title}
            <div onClick = { () => { setCount(setObj) }}>改变</div>
        </div>
    )
}