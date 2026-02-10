const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-heading">
          © 2025 Abdul Rehman Ali<span className="text-primary">.</span> All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/50">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
