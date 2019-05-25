export const truncateText = text => {
  return text.length > 55
    ? `${text.slice(0, 55)}...`
    : text;
};
