/*import React from "react";
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

export default Post;*/




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
    mylocation,
    sacheuref,
    //sacheuLocationFrameID,
  } = article.fields;
  const postDescription = marked(descriptionText);
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <div className="bio">
        <h2>
          <strong>Company: </strong>
          {company}
          <iframe
            src={mylocation}
            style={{ border: "0", width: "100%", height: "450px" }}></iframe>
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
      {/* <h2 style={{marginTop: "15px",backgroundColor: "#5f9ea0",color: "#fff",padding: "10px"}}>
        <strong>RichText:</strong> {documentToReactComponents(sacheuLocationFrameID)}
      </h2> */}

      <div
        style={{
          border: "5px dashed #44d829",
          borderRadius: "15px",
          padding: "20px",
          margin: "30px",
          backgroundColor: "teal",
        }}>
        <h1
          style={{
            fontSize: "60px",
            textAlign: "center",
            padding: "20px",
            border: "3px dashed #e85e5e",
            margin: "50px 20px 20px",
            color: "#fff",
            fontWeight: "bold",
          }}>
          Contentful Reference Data
        </h1>
        {sacheuref &&
          sacheuref.map((item, i) => (
            <div key={i}>
              <h2 className="title">
                {item.fields.title || item.fields.prosTitle}
              </h2>
              <div className="bio">
                <h2>
                  <strong>Company: </strong>
                  {item.fields.company}
                </h2>
                <h2>
                  <strong>Language: </strong>
                  {item.fields.language}
                </h2>
              </div>

              {/* <p style={{ marginTop: "20px", backgroundColor: "#fbecde", padding:'20px' }}>
              <strong>RichText:</strong>
              {documentToReactComponents(item.fields.descriptionText)}
            </p> */}
              <p
                style={{
                  marginTop: "20px",
                  backgroundColor: "#fbecde",
                  padding: "20px",
                }}>
                <strong>Reference RichText:</strong>
                {documentToReactComponents(item.fields.prosRich)}
              </p>

              <div className="metainfo" style={{ padding: "20px" }}>
                <h2>
                  <strong>Date:</strong> {item.fields.sacheuDate}
                </h2>
                <h2>
                  <strong>Mobile No:</strong> {item.fields.mobileno}
                </h2>
                <h2>
                  <strong>Location:</strong>
                  {item.fields.sacheuLocation && sacheuLocation.lat}
                  {sacheuLocation && sacheuLocation.lon}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;

