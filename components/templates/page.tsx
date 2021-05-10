import Head from "next/head";
import Menu from "../modules/menu";
import Footer from "../modules/footer";

type PageProps = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageProps) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Ribbit &amp; Roo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Menu />
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default PageTemplate;
