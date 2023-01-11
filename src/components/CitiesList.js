const styles = {
  list: {
    padding: 0,
  },
  item: {
    cursor: 'pointer',
  },
};

const CitiesList = ({ cities, onSelect }) => {
  return (
    <ul style={styles.list}>
      {cities.map(({ name, description }, index) => (
        <li key={name} onClick={() => onSelect(index)} style={styles.item}>
          {name} ({description})
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
