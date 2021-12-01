const Mot = (props) => {
  const { mot } = props;
  return (
    <div className="main-mot-container">
      <span className="main-mot-police">{mot}</span>
    </div>
  );
};

export default Mot;
