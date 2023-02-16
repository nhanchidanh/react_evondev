import React from "react";
import { data } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  // console.log(props.children);
  return (
    <div>
      {props.children}
      {data.map((item, index) => {
        let newClass = "";
        if (index === 0) newClass = "abc";

        return (
          <YoutubeItem
            key={index}
            img={item.img}
            className={newClass || "aaa"}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
