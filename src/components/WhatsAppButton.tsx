function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34600000000?text=Hola%2C%20quería%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-9 h-9"
      />
    </a>
  );
}

export default WhatsAppButton;
