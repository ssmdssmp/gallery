import { useEffect } from "react";
import ActiveImage from "./components/ActiveImage";
import List from "./components/List";
import { fetchImages } from "./hooks/http";
import { useAppDispatch } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImages(1));
  });
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-screen h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <ActiveImage />
      <List />
    </div>
  );
}

export default App;
