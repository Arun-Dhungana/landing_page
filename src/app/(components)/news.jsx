"use client";
import { Suspense, useState } from "react";
import { Newss } from "../components/new";
export const News = () => {
  const [count, setCount] = useState(6);
  const handleClick = () => {
    count == 6
      ? setCount(count + 2)
      : count > 6
      ? setCount(count - 2)
      : setCount(count + 2);
  };

  return (
    <div className="news">
      <div className="news-header">
        <h3>News</h3>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>

      <Suspense fallback={"loading...."}>
        <Newss count={count}></Newss>
      </Suspense>

      <button type="button" onClick={handleClick}>
        {count == 6 ? "View all news" : "View less news"}
      </button>
    </div>
  );
};
