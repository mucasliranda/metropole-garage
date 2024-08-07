import { RegisterNuiQuery, delay, hexToRgb, validateHexString } from "../global/utils";
import PersonalVehicle from '../global/domain/models/personalVehicle'

RegisterCommand("car", async (source: number, args: string[], rawCommand: string) => {
	const modelHash = GetHashKey(args[0])
	RequestModel(modelHash)
	while (!HasModelLoaded(modelHash)) await delay(100)

	const [x, y, z] = GetEntityCoords(PlayerPedId(), true)
	const h = GetEntityHeading(PlayerPedId())
	const veh = CreateVehicle(modelHash, x, y, z, h, true, true)

	if (!!args[1] && validateHexString(args[1])) {
		const rgb = hexToRgb(args[1])
		SetVehicleCustomPrimaryColour(veh, rgb.r, rgb.g, rgb.b)
	}

	if (!!args[2] && validateHexString(args[2])) {
		const rgb = hexToRgb(args[2])
		SetVehicleCustomSecondaryColour(veh, rgb.r, rgb.g, rgb.b)
	}

	while (!DoesEntityExist(veh)) await delay(100)
	SetPedIntoVehicle(PlayerPedId(), veh, -1)
}, false)

RegisterCommand("shop", () => {
	SetNuiFocus(true, true)
	SendNuiMessage(JSON.stringify({ action: "setVisible", data: true }))
}, false)

RegisterNuiQuery("getClientData", async (_) => {
	const coords = GetEntityCoords(PlayerPedId(), true)
	return { action: "getClientData", data: coords }
})

RegisterNuiQuery("closeNui", async () => {
	SetNuiFocus(false, false)
	return { action: "closeNui" }
})

RegisterNuiQuery("getVehicles", async () => {
	emitNet("getVehicles")
})

RegisterNuiQuery("getVehiclesByCategory", async (category) => {
	emitNet("getVehiclesByCategory", category)
})

RegisterNuiQuery("getVehicleByModel", async (model) => {
	emitNet("getVehicleByModel", model)
})

RegisterNuiQuery("getPersonalVehicles", async () => {
	emitNet("getPersonalVehicles")
})

RegisterNuiQuery("buyVehicle", async (data: any) => {
	const personalVehicle = PersonalVehicle.create({
		name: data.name,
		model: data.model,
		price: data.price,
		category: data.category,
		primaryColor: data.primaryColor,
		secondaryColor: data.secondaryColor,
		plate: data.plate
	})

	emitNet("buyVehicle", personalVehicle)

	await spawnVehicle(personalVehicle)
});

RegisterNuiQuery("spawnVehicle", async (data: PersonalVehicle) => {
	const personalVehicle = PersonalVehicle.create(data)

	await spawnVehicle(personalVehicle)
})

async function spawnVehicle(vehicle: PersonalVehicle) {
	const modelHash = GetHashKey(vehicle.model)
	RequestModel(modelHash)
	while (!HasModelLoaded(modelHash)) await delay(100)

	const [x, y, z] = GetEntityCoords(PlayerPedId(), true)
	const h = GetEntityHeading(PlayerPedId())
	const veh = CreateVehicle(modelHash, x, y, z, h, true, true)

	SetVehicleCustomPrimaryColour(veh, vehicle.primaryColorRGB().r, vehicle.primaryColorRGB().g, vehicle.primaryColorRGB().b)
	SetVehicleCustomSecondaryColour(veh, vehicle.secondaryColorRGB().r, vehicle.secondaryColorRGB().g, vehicle.secondaryColorRGB().b)

	SetVehicleNumberPlateText(veh, vehicle.plate)

	while (!DoesEntityExist(veh)) await delay(100)

	SetPedIntoVehicle(PlayerPedId(), veh, -1)
}