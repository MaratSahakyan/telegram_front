import Link from 'next/link';

const UserRootPage = async () => {
  const content = (
    <section>
      <h2>
        <Link href="/"> Back To Home </Link>
      </h2>
    </section>
  );

  return content;
};

export default UserRootPage;
