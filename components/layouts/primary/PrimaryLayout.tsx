import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
