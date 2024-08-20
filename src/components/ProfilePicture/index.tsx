import styles from "./style.module.css";

export const ProfilePicture: React.FC = () => {
  return (
    <div>
      <img src="public\Img\profilepicturedefault.png" alt="Default Profile Picture" className={styles.profilePicture} />
    </div>
  );
}