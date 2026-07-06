export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 flex h-20 items-center justify-center text-white bg-zinc-900">
      <p>Desenvolvido por Panizio &copy; {currentYear}</p>
    </footer>
  );
};
