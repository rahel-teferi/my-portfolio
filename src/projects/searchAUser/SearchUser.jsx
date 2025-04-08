import { Link, useNavigate } from "react-router-dom";
import "./SearchUser.css";
export const SearchUser = ({ data, value, onChange, onClick }) => {
  return (
    <div className="searchContainer">
      <section className="searchSection">
        <h2>Search User from Github</h2>
        <form className="searchForm">
          <input
            type="text"
            placeholder="Please enter user name"
            value={value}
            onChange={onChange}
            style={{
              padding: "5px",
              border: "2px solid grey",
              borderRadius: "5px",
            }}
          />
          <input
            type="button"
            value="Search"
            onClick={onClick}
            style={{
              margin: "10px",
              padding: "5px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "2px solid grey",
            }}
          />
        </form>
      </section>
      <section className="result">
        {data.length > 0 ? (
          <>
            <ul>
              <li>Result</li>

              {data.map((user, index) => (
                <li key={index}>
                  <p>{user.login}</p>
                  <img src={user.avatar_url} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p style={{ paddingBottom: "100px" }}>No result to show</p>
        )}
      </section>
      <section>
        <p>
          Go back to <Link to="/">Home</Link>
        </p>
        Go back to
        <a href="#" onClick={(e) => navigate(-1)}>
          Previous page
        </a>
      </section>
    </div>
  );
};
