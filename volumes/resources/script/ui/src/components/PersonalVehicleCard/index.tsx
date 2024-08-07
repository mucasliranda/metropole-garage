import PersonalVehicle from "../../../../global/domain/models/personalVehicle";
import { fetchNui } from "../../lib/fetchNui";
import { cn } from "../../lib/utils";

interface Props {
  vehicle: PersonalVehicle;
}

export function PersonalVehicleCard({ vehicle }: Props) {
  async function spawnVehicle() {
    await fetchNui('spawnVehicle', vehicle)
  }

  return (
    <div
      key={vehicle.model}
      className="flex flex-col items-center cursor-pointer hover:scale-105 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-md pt-2 relative"
      onClick={spawnVehicle}
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

      <div
        className={cn(`
          absolute
          top-2
          right-2

          w-4
          h-4

          border
          border-black
          rounded-sm `,
        )}
        style={{ backgroundColor: vehicle.primaryColor }}
      />

      <div
        className={cn(`
          absolute
          top-2
          right-8

          w-4
          h-4

          border
          border-black
          rounded-sm `
        )}
        style={{ backgroundColor: vehicle.secondaryColor }}
      />

      <div className="flex justify-between items-center p-2 bg-black absolute bottom-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-br-sm rounded-bl-md">
        <h2
          className="text-lg font-semibold"
        >{vehicle.name}</h2>
      </div>
    </div>
  )
}
