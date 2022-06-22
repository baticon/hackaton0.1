import style from "../styles/movingLogo.module.css";

const Logo = () => {
  return (
    <div className={style.fatherDiv}>
      <div class={style.cat}>
        <div>
          JUSAN
          <div class={style.dog}>
            <div>SINGULARITY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
