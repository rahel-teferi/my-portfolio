import { useState, useEffect } from "react";
import { Home } from "./core/Home.jsx";
import { Footer } from "./core/Footer.jsx";
// import "./App.css";
import { QuoteGenerator } from "./projects/quoteGenerator/QuoteGenerator.jsx";
import { DigitalClock } from "./projects/DigitalClock.jsx";
import { Carosel } from "./projects/carosel/Carosel.jsx";
import { Route, Routes } from "react-router-dom";
import { ShoppingList } from "./projects/shopping list/ShoppingList.jsx";
import { Header } from "./core/Header.jsx";
import { SearchUser } from "./projects/searchAUser/SearchUser.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  let cardsInfo = [
    {
      title: "First Title",
      content: "First content",
    },
    {
      title: "Second Title",
      content: <img src="sunset.jpg" />,
    },
    {
      title: "Third Title",
      content: "Third content",
    },
  ];
  const [quote, setQuote] = useState({});
  const baseURL = "https://qapi.vercel.app/api/random";

  const fetchQuote = async () => {
    try {
      let response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error("not found");
      }
      let data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function takeInput(e) {
    setQuery(e.target.value);
  }

  const userURL = "https://api.github.com";

  const getUser = async () => {
    if (query === "") {
      setResult("");
    } else {
      try {
        let response = await fetch(`${userURL}/search/users?q=${query}`);
        if (!response.ok) {
          throw new Error(`error is${error}`);
        }
        let userData = await response.json();
        let users = userData.items;
        setResult(users);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="digitalClock" element={<DigitalClock />} />
          <Route
            path="quoteGenerator"
            element={<QuoteGenerator data={quote} fetchNewQuote={fetchQuote} />}
          />
          <Route path="carosel" element={<Carosel data={cardsInfo} />} />
          <Route path="shoppingList" element={<ShoppingList />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="searchUser"
            element={
              <SearchUser
                data={result}
                onChange={takeInput}
                onClick={getUser}
                value={query}
              />
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
