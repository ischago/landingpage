import React, { useState, useEffect } from "react";
import IOSLoader from "./IOSLoader";
import review3 from "../assets/review-3.jpeg";
import review4 from "../assets/review-4.jpeg";
import review5 from "../assets/review-5.jpeg";
import review6 from "../assets/review-6.jpeg";
import review7 from "../assets/review-7.jpeg";
import review8 from "../assets/review-8.jpeg";
import review9 from "../assets/review-9.jpeg";

const ReviewGrid = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center py-20 w-full min-h-[200px]">
        <IOSLoader size="large" />
      </div>
    );
  }

  const reviews = [
    { src: review3, alt: "review-3" },
    { src: review4, alt: "review-4" },
    { src: review5, alt: "review-5" },
    { src: review6, alt: "review-6" },
    { src: review7, alt: "review-7" },
    { src: review8, alt: "review-8" },
    { src: review9, alt: "review-9" },
  ];

  return (
    <>
      {reviews.map((review, index) => (
        <img
          key={index}
          src={review.src}
          alt={review.alt}
          className="rounded-lg w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300"
        />
      ))}
    </>
  );
};

export default ReviewGrid;
