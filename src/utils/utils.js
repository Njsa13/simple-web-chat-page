export const getFileNameFromUrl = (url) => {
  try {
    const decodedUrl = decodeURIComponent(url);
    return decodedUrl.split('/').pop().split('?')[0];
  } catch (err) {
    console.error(err)
    return 'unknown.pdf';
  }
};