import footerData from "@/data/footer.json";

export default function Footer() {
  const { name, text } = footerData;
  return (
    <footer className="border-t border-border py-10 text-center text-xs text-muted">
      &copy; {new Date().getFullYear()} {name}. {text}
    </footer>
  );
}
