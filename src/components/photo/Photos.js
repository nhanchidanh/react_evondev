import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const Photos = () => {
  //useEffect(callback, [dependencies])
  // console.log("outside");

  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextpage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleLoadmorePhotos = async () => {
    const images = await getRandomPhotos(nextpage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextpage + 1);
  };

  useEffect(() => {
    //side-effects
    handleLoadmorePhotos();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={index} className="shadow-md rounded-lg bg-white p-2">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.download_url}
                alt={item.author}
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadmorePhotos}
          className={` inline-block px-8 rounded-md py-4 bg-purple-600 text-white `}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
