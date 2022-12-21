import { useAppSelector } from "../hooks/redux";
import { IImage } from "../types/Image";

const ActiveImage = () => {
  const { activeImage, isLoading } = useAppSelector(({ gallery }) => gallery);

  return (
    <div className="w-[600px] h-[500px] relative rounded-md border border-white overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={activeImage.urls.regular}
        alt="#"
      />

      {isLoading && (
        <img
          className="absolute m-auto top-0 bottom-0 left-0 right-0  "
          src={process.env.PUBLIC_URL + "/assets/spinner.svg"}
          alt="spinner"
        />
      )}
    </div>
  );
};

export default ActiveImage;