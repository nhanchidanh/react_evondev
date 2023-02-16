import React from "react";

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-img">
        <img className={props.className} src={props.img} alt="" />
      </div>
    </div>
  );
}

export default YoutubeItem;
