import React from "react";

const PostCard = (props) => {
  return (
    <div>
      <h3>
        {props.id}. {props.title}
      </h3>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
