export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-light-100 mb-2">
            © {currentYear} José Trangol. Todos los derechos reservados.
          </p>
          <p className="text-light-100 text-sm">
            Diseñado y desarrollado con React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
