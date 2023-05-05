import ImageGrid from "../../components/sampleComponents/ImageGrid";
import Image from "next/image";
const ImageGridPage = () => {
  const images = [
    "/image/sampleImages/image1.jpeg",
    "/image/sampleImages/image2.jpeg",
    "/image/sampleImages/image3.jpeg",
    "/image/sampleImages/image4.jpeg",
    "/image/sampleImages/image5.jpeg",
    "/image/sampleImages/image6.jpeg",
    "/image/sampleImages/image7.jpeg",
    "/image/sampleImages/image8.jpeg",
    "/image/sampleImages/image9.jpeg",
    "/image/sampleImages/image10.jpeg",
  ];
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center p-20 pb-2`}
    >
      <h1 className={`pb-2 text-3xl`}>Image Grid Sample</h1>
      <ImageGrid images={images} />
    </div>
  );
};

export default ImageGridPage;
