import Image from "next/image";

interface ImageGridProps {
  images: string[];
}
const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className={`grid grid-cols-2 gap-x-10 gap-y-20`}>
      {images.map((image) => (
        <div
          key={image}
          className={
            "relative flex items-center border-8 border-primary bg-white hover:border-white dark:border-secondary dark:hover:border-white"
          }
        >
          <Image src={image} width={"300"} height={"500"} alt={"image"} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
