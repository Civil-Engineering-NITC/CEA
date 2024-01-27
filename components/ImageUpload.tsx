import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { RightArrowButton } from "./RightArrowButton";
import styles from "./imageUpload.module.css";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

interface ImageUploadProps {
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  // value: string[];
  text: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  text,
}) => {
  const onUpload = (result: any) => {
    console.log(result.info.secure_url);
    onChange(result.info.secure_url);
  };

  return (
    <>
      <CldUploadWidget onUpload={onUpload} uploadPreset="interviews">
        {({ open }) => {
          return (
            <button onClick={() => open()} className={styles.upload}>
              <MdOutlineDriveFolderUpload />
              {text}
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
