import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="my-8 text-center ">
      <h1 className="mb-10 text-center text-2xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-blue-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
