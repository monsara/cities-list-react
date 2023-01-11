const City = ({ city, onChange }) => {
  return (
    <>
      <h2>{city.name}</h2>
      <textarea
        value={city.description}
        onChange={event => onChange(event.target.value)}
      />
    </>
  );
};

export default City;
