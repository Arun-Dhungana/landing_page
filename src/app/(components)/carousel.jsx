"use client";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "/images/carousel/layers.png",
    "/images/carousel/Company logo.png",
    "/images/carousel/sisy.png",
    "/images/carousel/hourglass.png",
    "/images/carousel/circooles.png",
  ];

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="carousel">
        <button id="prevBtn" className="btn" onClick={prevItem}>
          <ArrowBackIosIcon />
        </button>

        <div id="item-list" className="item-list">
          {items.map((src, index) => (
            <div
              key={index}
              className={`item ${
                index >= currentIndex && index < currentIndex + 4
                  ? "active"
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`carousel-item-${index}`}
                objectFit="cover"
                height={40}
                width={90}
              />
            </div>
          ))}
        </div>

        <button id="nextBtn" className="btn" onClick={nextItem}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};
