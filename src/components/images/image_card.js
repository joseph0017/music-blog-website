import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            photo by joe
          </div>
          <ul>
            <li>
              <strong>Views:</strong>
              3000
            </li>
            <li>
              <strong>Likes:</strong>
              400
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
