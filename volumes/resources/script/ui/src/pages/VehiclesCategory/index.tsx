import Vehicle from "../../../../global/domain/models/vehicle";
import Skeleton from "../../components/Skeleton";
import { VehicleCard } from "../../components/VehicleCard";
import VehicleGrid from "../../components/VehicleGrid";
import { useNuiQuery } from "../../hooks/useNuiQuery";
import { vehiclesMock } from "../../mock";

export default function VehiclesCategoryPage({ category }: { category: string }) {
  const [vehicles, _, isLoading] = useNuiQuery<Array<Vehicle>>({ eventName: "getVehiclesByCategory", shouldAutoFetch: true, mock: vehiclesMock.filter((_) => _.category === category), body: category });

  return (
    <VehicleGrid>
      {isLoading || !vehicles ? Array.from({ length: 30 }).map((_, index) => <Skeleton key={index} />)
        : vehicles?.map((vehicle: Vehicle) => <VehicleCard key={vehicle.model} vehicle={vehicle} />)
      }
    </VehicleGrid>
  )
}