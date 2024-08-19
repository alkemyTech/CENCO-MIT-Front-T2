import styles from './style.module.css';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  surname: string;
  phone: string;
  pais: string;
  setName: (value: string) => void;
  setSurname: (value: string) => void;
  setPhone: (value: string) => void;
  setPais: (value: string) => void;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  name,
  surname,
  phone,
  pais,
  setName,
  setSurname,
  setPhone,
  setPais,
  handleSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        <h2>Editar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <div>Nuevo Nombre:</div>
          <input
            type="text"
            name="name"
            placeholder="Nuevo Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>Nuevo Apellido:</div>
          <input
            type="text"
            name="surname"
            placeholder="Nuevo Apellido"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <div>Nuevo Teléfono:</div>
          <input
            type="tel"
            name="phone"
            placeholder="Nuevo Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div>Nuevo País:</div>
          <input
            type="text"
            name="pais"
            placeholder="Nuevo País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
          <br />
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;