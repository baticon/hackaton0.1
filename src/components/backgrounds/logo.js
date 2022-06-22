import style from "../styles/movingLogo.module.css";

const Logo = () => {
  return (
    <div className={style.fatherDiv}>
      <div className={style.cat}>
        <div>
          JUSAN
          <div className={style.dog}>
            <div>SINGULARITY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
