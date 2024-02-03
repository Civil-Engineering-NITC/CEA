import React from "react";
import { MdEngineering } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
interface IconsProps {
  type: string;
  name: string;
}

export const Icons: React.FC<IconsProps> = ({ type, name }) => {
  if (type === "coding" || type === "core")
    return (
      <MdOutlineLibraryBooks
        size={40}
        style={{ background: "none" }}
        color="white"
      />
    );
  if (name === "GATE EXAM" || name === "TOFEL" || name === "GRE EXAM")
    return (
      <MdEngineering
        style={{ backgroundColor: "inherit" }}
        size={50}
        color="white"
      />
    );
  if (name === "CAT EXAM ")
    return (
      <FaGraduationCap
        style={{ backgroundColor: "inherit" }}
        size={50}
        color="white"
      />
    );
  if (name === "UPSC")
    return (
      <FaHome style={{ backgroundColor: "inherit" }} size={50} color="white" />
    );
  return (
    <MdEngineering
      style={{ backgroundColor: "inherit" }}
      size={50}
      color="white"
    />
  );
};
