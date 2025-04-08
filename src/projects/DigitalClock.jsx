import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export const DigitalClock = () => {
  const currentDate = new Date("Addis Abeba");
  const [time, setTime] = useState(currentDate);
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let meridiem = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;

  function setNewTime() {
    setTime(new Date());
  }

  useEffect(() => {
    setInterval(setNewTime, 1000);
    return () => clearInterval(setNewTime);
  }, []);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <select style={{ margin: "auto" }}>
        <option value="Berlin">Berlin</option>
        <option value="Addis Abeba">Addis Abeba</option>
        <option value="Los Angles">Los Angles</option>
        <option value="Beijing">Beijing</option>
      </select>

      <section
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          margin: "auto",
          fontSize: "3rem",
        }}
      >
        {("0" + hour).slice(-2) +
          ":" +
          ("0" + minute).slice(-2) +
          ":" +
          ("0" + second).slice(-2) +
          " " +
          meridiem}
      </section>
      <section style={{ marginBottom: "50px" }}>
        <p>
          Go to
          <a href="#" onClick={() => navigate("/")}>
            home
          </a>
        </p>

        <p>
          Go back to
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </div>
  );
};
