import Header from "../header/header";

const About2 = () => {
  return (
    <div>
      <Header></Header>
      <div className="w3-row">
        <div className="w3-half">
          <h1 style={{ fontSize: "25px" }} className="text-left">
            {" "}
            SENIOR INTERNS
          </h1>
        </div>
        <div className="w3-half">
          <h2 style={{ fontSize: "20px" }}>
            About us<br></br>
          </h2>
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-quarter">
          <br></br>
          <div
            className="menu"
            style={{ paddingLeft: "50px", paddingTop: "20px" }}
          >
            <div style={{ display: "grid" }}>
              <b style={{ color: "white" }}>
                Our team, formerly know as the HIGH FIVE consists of 5 people
              </b>
              <li style={{ color: "white" }}>Ayim</li>
              <b style={{ fontSize: "15px", color: "white" }}>
                Future DevOps engineer at Jusan, patient about engineering and
                computing
              </b>
              <li style={{ color: "white" }}>Batyrbek</li>
              <b style={{ fontSize: "15px", color: "white" }}>
                Future front-end developer at Jusan, likes what he is doing,
                yet, sometimes does not know what he is doing
              </b>
              <li style={{ color: "white" }}>Dana</li>
              <b style={{ fontSize: "15px", color: "white" }}>
                Future back-end developer at Jusan, she is out censorship person
                🙈 🙉 🙊
              </b>
              <li style={{ color: "white" }}>Dossymkhan</li>
              <b style={{ fontSize: "15px", color: "white" }}>
                Future iOS developer at Jusan, he likes NF and paying his bills
              </b>
              <li style={{ color: "white" }}>Ramazan</li>
              <b style={{ fontSize: "15px", color: "white" }}>
                Future back-end developer at Jusan ... 🥴 ... well, good luck
                Jusan
              </b>
            </div>
            <div></div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
