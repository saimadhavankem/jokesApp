import "./index.css";

const Home = (props) => {
  const { onLogout, details } = props;
  const onClickLogout = () => {
    onLogout(false);
  };

  return (
    <div className="home-page">
      <ul>
        {details.map((each) => (
          <li>{each.joke}</li>
        ))}
      </ul>
      <button className="log-out" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
