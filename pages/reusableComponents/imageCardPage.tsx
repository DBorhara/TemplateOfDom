import ImageCard from "../../components/sampleComponents/ImageCard";

const ImageCardPage = () => {
  const src =
    "https://images.unsplash.com/photo-1678930955580-da94712f3c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80";
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center py-2`}
    >
      <h1 className={`pb-2 text-3xl`}>Sample Image Card</h1>
      <ImageCard
        imageSrc={src}
        title={"Sample Card"}
        bodyText={"This is sample card text"}
        buttonText={"This is button text"}
        buttonLink={`/`}
      />
    </div>
  );
};

export default ImageCardPage;
