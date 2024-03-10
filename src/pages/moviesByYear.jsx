import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import "../CSS/yearWise.css";
import YearWiseMovie from "../components/YearWiseMovie";

const LazyYear = lazy(() => import("../components/YearWiseMovie"));

function MoviesByYear() {
  const ByYearRef = useRef();

  return (
    <div className="byYear" ref={ByYearRef}>
      <YearWiseMovie year={2012} />
      <Suspense fallback={<div>loading...</div>}>
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
