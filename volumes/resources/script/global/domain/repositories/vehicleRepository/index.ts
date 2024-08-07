import Vehicle from "../../models/vehicle";
import PersonalVehicle from '../../models/personalVehicle'
import { Orm } from "../../../utils";

export abstract class VehicleRepository {
  abstract getVehicleByModel(model: string): Promise<Vehicle | null>
  abstract getVehicles(): Promise<Array<Vehicle>>
  abstract getVehiclesByCategory(category: string): Promise<Array<Vehicle>>
  abstract getPersonalVehicles(playerId: string): Promise<Array<PersonalVehicle>>
  abstract createPlayerVehicle(personalVehicle: PersonalVehicle, playerId: string): Promise<void>
}


export class VehicleRepositoryImpl implements VehicleRepository {
  private orm: Orm;
  constructor(private ox: any) {
    this.orm = new Orm(this.ox)
  }

  async getVehicleByModel(model: string) {
    try {
      const result = await this.orm.execute("SELECT * FROM vehicles WHERE model = ?", [model])
      return Vehicle.create(result[0])
    } catch (error) {
      throw new Error(error)
    }
  }

  async getVehicles() {
    try {
      const result = await this.orm.execute("SELECT * FROM vehicles")
      return result.map(Vehicle.create)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getVehiclesByCategory(category: string) {
    try {
      const result = await this.orm.execute("SELECT * FROM vehicles WHERE category = ?", [category])
      return result.map(Vehicle.create)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getPersonalVehicles(playerId: string) {
    try {
      const result = await this.orm.execute(`
        SELECT 
          v.name,
          p.model,
          v.price,
          v.category,
          p.primary_color,
          p.secondary_color,
          p.plate
        FROM 
          personal_vehicles p
        INNER JOIN
          vehicles v
        ON 
          p.model = v.model
        WHERE 
          p.player_id = ?
        ORDER BY
          p.created_at DESC`
        , [playerId]
      )
      return result.map((v: any) => PersonalVehicle.create({ name: v.name, model: v.model, price: v.price, category: v.category, primaryColor: v.primary_color, secondaryColor: v.secondary_color, plate: v.plate }))
    } catch (error) {
      throw new Error(error)
    }
  }

  async createPlayerVehicle(personalVehicle: PersonalVehicle, playerId: string) {
    try {
      await this.orm.execute(`
        INSERT INTO 
          personal_vehicles (id, player_id, model, primary_color, secondary_color, plate) 
        VALUES 
          (?, ?, ?, ?, ?, ?)`
        , [personalVehicle.id, playerId, personalVehicle.model, personalVehicle.primaryColor, personalVehicle.secondaryColor, personalVehicle.plate]
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}