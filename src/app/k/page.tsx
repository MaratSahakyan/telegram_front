import SignIn from '../../components/Signin';

const UserRootPage = async () => {
  const content = (
    <section>
      <SignIn />
    </section>
  );

  return content;
};

export default UserRootPage;
