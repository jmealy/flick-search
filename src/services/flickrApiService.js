import addImages from "../state/actions/addImages";

const getImages = (searchTerm) => async dispatch =>{
  const baseUrl = ' https://www.flickr.com/services/rest/?method=flickr.photos.search'
  const apiKey = '0108b623dbb81829b5f013074dee22bb';
  const options = `&api_key=${apiKey}&tags=${searchTerm}&per_page=20&page=1&format=json&nojsoncallback=1`;

  let responseBody;
  try {
    const response = await fetch(baseUrl + options);
    responseBody = await response.json();

    const imageUrls = responseBody.photos.photo.map(image =>
      `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
    );
    dispatch(addImages(imageUrls));
  } catch (error){
    console.log(`an error occured while fetching images: ${error}`);

    dispatch(addImages([]));
  }
};

export { getImages };
