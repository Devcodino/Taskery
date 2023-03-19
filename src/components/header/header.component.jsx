export const Header = ({ maintitle, secondtitle }) => {
  return (
    <>
      <div>
        <h1>{maintitle}</h1>
        <p>{secondtitle}</p>
      </div>
    </>
  );
};

Header.defaultProps = {
  maintitle: "No Maintitle",
  secondtitle: "No Second Title",
};
