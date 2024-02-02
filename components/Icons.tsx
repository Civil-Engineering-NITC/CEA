import React from "react";
import { MdEngineering } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

interface IconsProps {
  type: string;
}

export const Icons: React.FC<IconsProps> = ({ type }) => {
  if (type === "engineering")
    return (
      <MdEngineering
        style={{ backgroundColor: "inherit" }}
        size={50}
        color="white"
      />
    );
  if (type === "business") return <FaHome size={50} color="white" />;
  if (type === "civil-service") return <FaHome size={50} color="white" />;
  if (type === "materials")
    return (
      <MdOutlineLibraryBooks
        size={40}
        style={{ background: "none" }}
        color="white"
      />
    );
};
