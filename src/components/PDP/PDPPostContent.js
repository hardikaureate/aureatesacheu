import React from 'react'
import PDPContentDisplay from './PDPContentDisplay'

const PDPPostContent = ({ postss }) => {
    console.log({postss})
    return (
        <div>
            {postss.map((articlepro, index) => <PDPContentDisplay articlepro={articlepro} key={index} />)}
        </div>
    )
}

export default PDPPostContent