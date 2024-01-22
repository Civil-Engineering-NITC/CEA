import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';

interface ImageUploadProps{
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    // value: string[];
}

export const ImageUpload : React.FC<ImageUploadProps> = ({
    onChange,
    onRemove,
    // value
}) => {

    const onUpload = (result: any) => {
        console.log(result.info.secure_url);
        onChange(result.info.secure_url);
        };

  return (
    <>
    <div>
        {/* {value.map((url) => (
          <div key={url} >
            <div >
              <button onClick={() => onRemove(url)} >
              Trash
              </button>
            </div>
            <Image
              fill
              alt="Image"
              src={url}
            />
          </div>
        ))} */}
    </div>
    <CldUploadWidget onUpload={onUpload} uploadPreset="interviews">
            {({ open }) => {
                return (
                <button onClick={() => open()}>
                    Upload an Image
                </button>
                );
            }}
            </CldUploadWidget>
    </>
  )
}
