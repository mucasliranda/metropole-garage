import { useNuiQuery } from "../../hooks/useNuiQuery";
import { vehiclesMock } from '../../mock'
import Vehicle from '../../../../global/domain/models/vehicle'
import { VehicleCard } from "../../components/VehicleCard"
import VehicleGrid from "../../components/VehicleGrid";
import Skeleton from "../../components/Skeleton";

export default function HomePage() {
  const [vehicles, _, isLoading] = useNuiQuery<Array<Vehicle>>({ eventName: "getVehicles", shouldAutoFetch: true, mock: vehiclesMock });

  return (
    <VehicleGrid>
      {isLoading || !vehicles ? Array.from({ length: 30 }).map((_, index) => <Skeleton key={index} />)
        : vehicles.map((vehicle) => <VehicleCard key={vehicle.model} vehicle={vehicle} />)
      }
    </VehicleGrid>
  )
}
