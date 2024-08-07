import { cn } from "../../lib/utils";
import { useRouter } from "../../providers/RouterProvider";

const opts = [
  { name: "Início", path: "home" },
  { name: "Garage", path: "garage" },
  { name: "Compactos", path: "category/compacts" },
  { name: "Coupes", path: "category/coupes" },
  { name: "Motos", path: "category/motorcycles" },
  { name: "Muscles", path: "category/muscle" },
  { name: "Off Road", path: "category/offroad" },
  { name: "Sedans", path: "category/sedans" },
  { name: "Esportivos", path: "category/sports" },
  { name: "Super", path: "category/super" },
  { name: "SUVs", path: "category/suvs" },
  { name: "Vans", path: "category/vans" },
]

export default function Navbar() {
  const { navigate, page } = useRouter();

  return (
    <nav
      className="
        p-0
        mt-0
        mr-2
        flex 
        justify-evenly 
        items-center 
        gap-2 
        overflow-x-scroll 
        overflow-y-hidden 

        lg:mt-2
        lg:p-2
      "
    >
      {opts.map(({ name, path }) => (
        <span
          key={path}
          onClick={() => navigate(path)}
          className={cn(
            "text-lg font-medium cursor-pointer p-2 underline-offset-4 hover:underline",
            page === path && "font-semibold underline"
          )}
        >
          {name}
        </span>
      ))}
    </nav>
  )
}