const handleRating = (rating: number) => {
  const stars = [];
  const starsFull = "/assets/star-full.svg";
  const starEmpty = "/assets/star-empty.svg";

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(starsFull);
    } else {
      stars.push(starEmpty);
    }
  }
  return stars;
};

export default handleRating;
