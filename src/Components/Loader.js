import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
    return (
      <div
        className="loaderContainer"
      >
        {new Array(20).fill(0).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="bookCard"
              width={300}
              height={350}
            />
          );
        })}
      </div>
    );
};

export default Loader;
