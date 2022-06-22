const About2 = () => {
  return (
    <div>
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
          <div className="menu">
            <nav className="navbar">
              <ul className="navbar-nav list-group">
                <li className="nav-item text-center list-group-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item text-center list-group-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item text-center list-group-item">
                  <a className="nav-link" href="#">
                    Registration
                  </a>
                </li>
                <li className="nav-item text-center list-group-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </nav>
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
