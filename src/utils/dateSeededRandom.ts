export default (maxLength: number) => {
  const date = new Date();
  const dateString = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
  return Math.floor(
    Math.abs(Math.sin(parseInt(dateString)) * 100000) % maxLength
  );
};
