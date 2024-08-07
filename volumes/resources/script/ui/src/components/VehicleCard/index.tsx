import Vehicle from "../../../../global/domain/models/vehicle";
import { useRouter } from "../../providers/RouterProvider";

interface Props {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: Props) {
  const { navigate } = useRouter();

  return (
    <div
      key={vehicle.model}
      className="flex flex-col items-center cursor-pointer hover:scale-105 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-md pt-2 relative"
      onClick={() => navigate(`vehicle/${vehicle.model}`)}
    >
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="
          w-min
          
          object-contain 
          rounded-md 
          mb-8

          overflow-hidden

          h-20        
        "
      />

      <div className="flex justify-between items-center p-2 bg-black absolute bottom-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-br-sm rounded-bl-md">
        <h2
          className="text-lg font-semibold"
        >{vehicle.name}</h2>
      </div>
    </div>
  )
}
