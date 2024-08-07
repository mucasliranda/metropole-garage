import HomePage from "../pages/Home";
import VehiclesCategoryPage from "../pages/VehiclesCategory";
import GaragePage from "../pages/Garage";
import VehiclePage from "../pages/Vehicle";
import { useRouter } from "../providers/RouterProvider";
import Route from "../components/Route";

export function Router() {
  const { page } = useRouter()

  return (
    <>
      <Route path="vehicle/:model" page={page}>
        <VehiclePage model={page.split('/')[1]} />
      </Route>

      <Route path="home" page={page}>
        <HomePage />
      </Route>
      <Route path="garage" page={page}>
        <GaragePage />
      </Route>

      <Route path="category/:category" page={page}>
        <VehiclesCategoryPage category={page.split('/')[1]} />
      </Route>
    </>
  )
}

