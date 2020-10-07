import React from "react";
import img from "../images/wireframe/1.jpg";

const Article = (props) => {
  console.log(props);
  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src={img} />
        </div>
        <div className="content">
          <a className="header">{props.data.title}</a>
          <div className="meta">
            <span></span>
          </div>
          <div className="description">
            <p>{props.data.content}</p>
          </div>
          <div className="extra">Additional Details</div>
        </div>
      </div>
    </div>
  );
};
export default Article;
