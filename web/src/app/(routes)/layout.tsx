import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";

interface Props {
  children: React.ReactNode;
}

export default function RoutesLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
