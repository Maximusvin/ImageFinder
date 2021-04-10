const ImageGalleryItem = ({ imgUrl }) => (
  <li className="ImageGalleryItem">
    <img src={imgUrl} alt="" className="ImageGalleryItem-image" />
  </li>
);
export default ImageGalleryItem;
