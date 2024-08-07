import PersonalVehicle from "../../../../global/domain/models/personalVehicle";
import { PersonalVehicleCard } from "../../components/PersonalVehicleCard";
import Skeleton from "../../components/Skeleton";
import VehicleGrid from "../../components/VehicleGrid";
import { useNuiQuery } from "../../hooks/useNuiQuery";

export default function Garage() {
  const [vehicles, _, isLoading] = useNuiQuery<Array<PersonalVehicle>>({ eventName: "getPersonalVehicles", shouldAutoFetch: true });

  return (
    <VehicleGrid>
      {isLoading || !vehicles ? Array.from({ length: 30 }).map((_, index) => <Skeleton key={index} />)
        : vehicles?.map((vehicle) => <PersonalVehicleCard key={vehicle.model} vehicle={vehicle} />)
      }
    </VehicleGrid>
  )
}