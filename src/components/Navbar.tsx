import logo from "@/assets/logo.jpeg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <img src={logo} alt="CAJ TECH" className="w-9 h-9 rounded-lg object-contain" />
        <span className="font-display text-2xl text-gold-gradient tracking-wider">CAJ TECH</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/caj.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram CAJ TECH"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a
          href="https://www.instagram.com/caj.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-gradient text-primary-foreground font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Teste Grátis
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;