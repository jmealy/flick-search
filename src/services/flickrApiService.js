import addImages from "../state/actions/addImages";
import config from '../config';

const getImages = (searchTerm) => async dispatch => {
  const options = `&api_key=${config.apiKey}&tags=${searchTerm}&per_page=${config.maxImages}
    &page=1&format=json&nojsoncallback=1`;

  let responseBody;
  try {
    const response = await fetch(config.flickrUrl + options);
    responseBody = await response.json();

    const imageUrls = responseBody.photos.photo.map(image =>
      `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
    );
    dispatch(addImages(imageUrls));
  } catch (error) {
    console.log(`An error occured while fetching images: ${error}`);

    dispatch(addImages([]));
  }
};

export { getImages };
