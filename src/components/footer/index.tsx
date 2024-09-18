import './styles.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Desenvolvido por Panizio &copy; {currentYear}</p>
    </footer>
  );
};
