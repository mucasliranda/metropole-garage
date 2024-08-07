import PersonalVehicle from "../global/domain/models/personalVehicle";
import { VehicleRepositoryImpl } from "../global/domain/repositories/VehicleRepository";

const vehiclesRepository = new VehicleRepositoryImpl(global.exports["oxmysql"])

onNet("getVehicles", async () => {
  const source = global.source
  const vehicles = await vehiclesRepository.getVehicles()

  emitNet("getVehiclesResponse", source, vehicles)
})

onNet("getVehiclesByCategory", async (category: string) => {
  const source = global.source
  const vehicles = await vehiclesRepository.getVehiclesByCategory(category)

  emitNet("getVehiclesByCategoryResponse", source, vehicles)
})

onNet("getVehicleByModel", async (model: string) => {
  const source = global.source
  const vehicle = await vehiclesRepository.getVehicleByModel(model)

  emitNet("getVehicleByModelResponse", source, vehicle)
})

onNet("buyVehicle", async (personalVehicle: PersonalVehicle) => {
  const source = global.source
  const id = getPlayerIdentifiers(source);
  const playerId = id[1];

  await vehiclesRepository.createPlayerVehicle(personalVehicle, playerId)

  emitNet("buyVehicleResponse", source, { success: true, message: "Vehicle bought" })
})

onNet("getPersonalVehicles", async () => {
  const source = global.source
  const id = getPlayerIdentifiers(source);
  const playerId = id[1];

  const vehicles = await vehiclesRepository.getPersonalVehicles(playerId)

  emitNet("getPersonalVehiclesResponse", source, vehicles)
})