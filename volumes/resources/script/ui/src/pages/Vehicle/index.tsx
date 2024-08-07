import Vehicle from "../../../../global/domain/models/vehicle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { useNuiQuery } from "../../hooks/useNuiQuery";
import { fetchNui } from "../../lib/fetchNui";
import { vehiclesMock } from "../../mock";
import { useForm } from 'react-hook-form'

interface FieldValues {
  primaryColor: string;
  secondaryColor: string;
  plate: string;
}

export default function VehiclePage({ model }: { model: string }) {
  const [vehicle] = useNuiQuery<Vehicle>({ eventName: "getVehicleByModel", shouldAutoFetch: true, body: model, mock: vehiclesMock.find((v) => v.model === model) });

  const {
    register,
    handleSubmit
  } = useForm<FieldValues>()

  async function onSubmit(data: FieldValues) {
    await fetchNui('buyVehicle', {
      name: vehicle?.name,
      model: model,
      price: vehicle?.price,
      category: vehicle?.category,
      primaryColor: data.primaryColor,
      secondaryColor: data.secondaryColor,
      plate: data.plate,
    })
  }

  return (
    <div
      className="
        h-full
        w-full
        p-2
        mt-8
        sm:mt-0
        flex
        flex-col-reverse
        sm:flex-row
        justify-end
        sm:justify-evenly
        items-center
        gap-12
        sm:gap-4
        overflow-y-auto
        overflow-x-hidden
      "
    >
      {vehicle && (
        <>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="
              w-full
              max-w-80
              object-contain
            "
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              w-full 
              max-w-80
              flex 
              flex-col 
              gap-4
            "
          >
            <div className="w-full max-w-sm grid items-center gap-1.5">
              <Label htmlFor="primaryColor">Cor Primária</Label>
              <Input
                id="primaryColor"
                type="color"
                className="p-0"
                {...register('primaryColor')}
              />
            </div>

            <div className="w-full max-w-sm grid items-center gap-1.5">
              <Label htmlFor="secondaryColor">Cor Secundária</Label>
              <Input
                id="secondaryColor"
                type="color"
                className="p-0"
                {...register('secondaryColor')}
              />
            </div>

            <div className="w-full max-w-sm grid items-center gap-1.5">
              <Label htmlFor="plate">Placa</Label>
              <Input
                id="plate"
                placeholder="Placa"
                {...register('plate')}
                onChange={(e) => {
                  if (e.target.value.length > 8) {
                    e.target.value = e.target.value.slice(0, 8)
                  }
                  register('plate').onChange(e)
                }}
              />
            </div>

            <Button
              type="submit"
            >
              Comprar
            </Button>
          </form>
        </>
      )}
    </div>
  )
}