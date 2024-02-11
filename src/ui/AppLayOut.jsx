import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
import CartOverview from "../features/cart/CartOverview";

function AppLayOut() {
  const navigation = useNavigation();
  let isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}
      <Header />

      <main className="overflow-auto">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayOut;
