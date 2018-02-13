export default (inputFile) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reject();
    };
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsDataURL(inputFile);
  });
};
