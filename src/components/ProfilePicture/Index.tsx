import styles from "./style.module.css";

const ProfilePicture: React.FC = () => {
  return (
    <main>
      <img src="public\Img\profilepicturedefault.png" alt="Default Profile Picture" className={styles.profilePicture} />
    </main>
  );
}

export default ProfilePicture;