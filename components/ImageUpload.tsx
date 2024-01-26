import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { RightArrowButton } from "./RightArrowButton";

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
            <div
              className="wrapper"
              onClick={() => open()}
              style={{ margin: "1rem 0" }}
            >
              <RightArrowButton text={text} redirectLink="" />
            </div>
            // <button onClick={() => open()} style={{margin: "2rem 0"}}>
            //     {text}
            // </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
