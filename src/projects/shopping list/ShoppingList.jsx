import { useState } from "react";
import { AddedList } from "./AddedList";
import { Link, useNavigate } from "react-router-dom";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

export const ShoppingList = () => {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function changeInputValue(e) {
    setInputValue(e.target.value);
  }
  function addToTheList(e) {
    if (inputValue.trim() !== "") {
      setItem((item) => [...item, inputValue]);
      setInputValue((i) => (i = ""));

      // form.reset();
    }
    console.log(item);
  }
  function moveDown(index) {
    if (index < item.length - 1) {
      const updatedList = [...item];

      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setItem(updatedList);
    }
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedList = [...item];

      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setItem(updatedList);
    }
  }

  function deleteItem(index) {
    const undeletedItems = item.filter((_, i) => i !== index);
    setItem(undeletedItems);
  }
  function goBackHome(e) {
    e.preventDefault();
    navigate("/");
  }
  // const styleForList = {
  //   paddingLeft: "0 50px",
  //   width: "100%",
  //   padding: "20px 40px",
  //   textAlign: "left",
  //   maxHeight: "70vh",
  //   overflowY: "scroll",
  // };
  const navigate = useNavigate();
  return (
    <>
      <section
        style={{
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          height: "75vh",
        }}
      >
        <h1 style={{ margin: "20px" }}>Shopping list</h1>

        <form>
          <input
            type="text"
            name="itemToAdd"
            placeholder="Add new item"
            value={inputValue}
            onChange={changeInputValue}
            style={{
              width: "50%",
              padding: "5px",
              border: "2px solid grey",
              borderRadius: "5px",
              marginBottom: "50px",
            }}
          />
          <button
            style={{
              margin: "10px",
              padding: "5px 20px",
              backgroundColor: "lightBlue",
              borderRadius: "8px",
              border: "2px solid grey",
            }}
            type="button"
            onClick={addToTheList}
          >
            Add
          </button>
        </form>
        <AddedList
          data={item}
          onDeleteItem={deleteItem}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
          // sl={styleForList}
        />
      </section>
      <section style={{ margin: "20px 10px" }}>
        <p>
          Go back to <Link to="/">Home</Link>
        </p>

        <p>
          Go back to
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </>
  );
};
