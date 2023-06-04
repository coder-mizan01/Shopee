import React, { useState } from "react";
//css
import "../CSS/MyImage.css";

const MyImage = ({ imgs = [""] }) => {

  const [curImage, setCurImage] = useState(imgs[0]);

  return (
    <>

      <div className="main-image-div">
        <img src={curImage === '' ? imgs[0] : curImage } alt="sda" />
      </div>

      <div className="random-images">
        {imgs.map((curElm, index) => {
          let i = 3;
          if (i > index) {
            return <img key={index} src={curElm} alt="ss" 
             onClick={()=>setCurImage(curElm)}
            />;
          }
        })}
      </div>
    </>
  );
};

export default MyImage;
