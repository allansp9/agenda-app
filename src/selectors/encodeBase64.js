export default (inputFile) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reject(inputFile);
    };
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsDataURL(inputFile);
  });
};
