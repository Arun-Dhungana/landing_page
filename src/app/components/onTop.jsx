"use client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export const Iocn = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={handleClick}>
      <ArrowUpwardIcon></ArrowUpwardIcon>
    </div>
  );
};
