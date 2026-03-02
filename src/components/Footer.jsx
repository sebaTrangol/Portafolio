export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <p className="text-light-100 text-xs sm:text-sm mb-1 sm:mb-2">
            © {currentYear} José Trangol. Todos los derechos reservados.
          </p>
          <p className="text-light-100 text-xs">
            Diseñado y desarrollado con React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
