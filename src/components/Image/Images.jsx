import React from 'react'

export default function Images() {
    const image_string = `product-087091-1685272955817.png`

    return (
        <div>
            <div>Image</div>
            <img src={`http://127.0.0.1:8089/api/v1/images/banner/${image_string}`} alt="" />
        </div>
    )
}
