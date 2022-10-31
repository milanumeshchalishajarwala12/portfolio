import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCallback, useContext, useEffect, useState } from "react";
import { getStorageItemsByPath } from "../Utils/storageUtils";
import { FirebaseContext } from "../Contexts/FirebaseContext";
import { getStorage } from "firebase/storage";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../Utils/firebaseUtils";

const MediaCarousel = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const fbConfig = initializeApp(firebaseConfig);
  const fbStorgae = getStorage();
  const getImageUrls = async () => {
    const urls = await getStorageItemsByPath(fbStorgae, "images/favorites");
    return urls || [];
  };
  useEffect(() => {
    getImageUrls().then((res) => {
      setTimeout(() => {
        setImageUrls(res);
      }, 2000);
    });
  }, []);

  return (
    <Carousel
      autoFocus
      autoPlay
      infiniteLoop
      className="imageCarousel"
      dynamicHeight
    >
      {imageUrls.map((url) => {
        return (
          <div>
            <img src={url} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default MediaCarousel;
