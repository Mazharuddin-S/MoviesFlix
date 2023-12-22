import React, { lazy, Suspense } from "react";
import "../CSS/yearWise.css";
import YearWiseMovie from "./YearWiseMovie";

const LazyYear = lazy(() => import("./YearWiseMovie"));

function MoviesByYear() {
  console.log("movies by year loaded");
  return (
    <div className="byYear">
      <YearWiseMovie year={2012} />
      <Suspense fallback="loading...">
        <LazyYear year={2013} />
        <LazyYear year={2014} />
        <LazyYear year={2015} />
        <LazyYear year={2016} />
        <LazyYear year={2017} />
        <LazyYear year={2018} />
        <LazyYear year={2019} />
        <LazyYear year={2020} />
        <LazyYear year={2021} />
        <LazyYear year={2022} />
        <LazyYear year={2023} />
      </Suspense>
    </div>
  );
}
export default MoviesByYear;
