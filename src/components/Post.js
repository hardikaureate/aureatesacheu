import React from "react";
import marked from "marked";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Post = ({ article }) => {
  console.log(article);
  const {
    title,
    medfile,
    descriptionText,
    language,
    company,
    sacheuDate,
    sacheuLocation,
    mobileno,
    demodata,
  } = article.fields;
  const postDescription = marked(descriptionText);
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <div className="bio">
        <h2>
          <strong>Company: </strong>
          {company}
        </h2>
        <h2>
          <strong>Language: </strong>
          {language}
        </h2>
      </div>

      {medfile && (
        <img
          className="featuredImage"
          src={medfile.fields.file.url}
          alt={title}
          title={title}
        />
      )}
      <section
        style={{
          marginTop: "15px",
          padding: "20px 30px",
          background: "#f3cfd6",
          marginBottom: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: postDescription }}
      />
      <div className="metainfo">
        <h2>
          <strong>Date:</strong> {sacheuDate}
        </h2>
        <h2>
          <strong>Mobile No:</strong> {mobileno}
        </h2>
        <h2>
          <strong>Location:</strong> {sacheuLocation && sacheuLocation.lat}{" "}
          {sacheuLocation && sacheuLocation.lon}
        </h2>
      </div>
      <h2
        style={{
          marginTop: "15px",
          backgroundColor: "#5f9ea0",
          color: "#fff",
          padding: "10px",
        }}>
        <strong>RichText:</strong> {documentToReactComponents(demodata)}
      </h2>
    </div>
  );
};

export default Post;
