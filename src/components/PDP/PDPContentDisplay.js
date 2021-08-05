import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const PDPContentDisplay = ({ articlepro }) => {
    console.log('PDPDATA',articlepro)
    const { prosTitle, prosRich, prosImage, prosref } = articlepro.fields
    /* const postDescription = marked(prosRich) */
    return (
      <div className="post">
         <h2 className="title">{articlepro.fields.prosTitle}</h2>
  
        {prosImage && (
          <img
            className="featuredImage"
            src={prosImage.fields.file.url}
            alt={prosTitle}
            title={prosTitle}
          />
        )}
        <h2
          style={{
            marginTop: "15px",
            backgroundColor: "#5f9ea0",
            color: "#fff",
            padding: "10px",
          }}>
          <strong>RichText:</strong> {documentToReactComponents(prosRich)}
        </h2>
        {prosref}
      </div>
    )
  }
  
export default PDPContentDisplay
