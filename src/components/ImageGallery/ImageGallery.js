import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(img => (
      <ImageGalleryItem key={img.id} imgUrl={img.webformatURL} />
    ))}
  </ul>
);
export default ImageGallery;
