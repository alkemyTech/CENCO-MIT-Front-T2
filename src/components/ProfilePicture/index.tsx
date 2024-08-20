import styles from "./style.module.css";
import { FC } from "react";

export const ProfilePicture: FC = () => {
  return (
    <div>
      <img src="public\Img\profilepicturedefault.png" alt="Default Profile Picture" className={styles.profilePicture} />
    </div>
  );
}