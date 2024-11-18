import styles from "../components/ally/ally.module.css";
import { AllyProvider } from "../providers";
import AllyContainer from "../components/ally/AllyContainer";

export default function Ally() {
  return (
    <div className={`content ${styles.ally}`}>
      <AllyProvider>
        <div>Ally goes here</div>
        <AllyContainer />
      </AllyProvider>
    </div>
  );
}
