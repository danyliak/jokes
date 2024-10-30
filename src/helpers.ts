export const formatTime = (
  date: string,
): `${string}/${string}/${string} ${string}:${string}:${string}` => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const fullDay = day < 10 ? `0${day}` : day;
  const month = dateObj.getMonth() + 1;
  const fullMonth = month < 10 ? `0${month}` : month;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  return `${fullDay}/${fullMonth}/${year} ${hours}:${minutes}:${seconds}`;
};
