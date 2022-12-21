import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { nextImage, prevImage } from "../hooks/http";
import { setActiveImage } from "../store/reducers/gallerySlice";
import { IImage } from "../types/Image";
import { nanoid } from "@reduxjs/toolkit";
const List = () => {
  const { list, activeImage, currentPage } = useAppSelector(
    ({ gallery }) => gallery
  );

  const dispatch = useAppDispatch();
  const ListImage = ({ image }: { image: IImage }) => {
    return (
      <li
        onClick={() => {
          if (list.indexOf(image) === 3) {
            dispatch(nextImage(currentPage + 3));
          }
          if (list.indexOf(image) === 0 && currentPage !== 1) {
            dispatch(prevImage(currentPage - 3));
          }
          dispatch(setActiveImage(image));
        }}
        className={
          image.id === activeImage.id
            ? "h-20  shadow-lg cursor-pointer rounded-md w-32  overflow-hidden border-2 border-pink-400"
            : "h-20  shadow-lg cursor-pointer rounded-md w-32   overflow-hidden"
        }
      >
        <img src={image.urls.small} alt="" />
      </li>
    );
  };
  return (
    <div>
      <ul className="flex  justify-between w-[600px]">
        {list.map((item) => {
          return <ListImage key={nanoid()} image={item} />;
        })}
      </ul>
    </div>
  );
};

export default List;
