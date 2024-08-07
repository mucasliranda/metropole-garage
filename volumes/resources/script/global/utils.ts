interface Output {
  action: string;
  data?: unknown;
}

export function RegisterNuiQuery(eventName: string, cb: (data: any) => Promise<Output | void>) {
  RegisterNuiCallbackType(eventName)
  on(`__cfx_nui:${eventName}`, async (data: any) => {
    try {
      const output = await cb(data)
      SendNuiMessage(JSON.stringify(output))
    } catch (error) { }
  });

  onNet(`${eventName}Response`, async (data: Output['action']) => {
    SendNuiMessage(JSON.stringify({ action: eventName, data }))
  })
}

export class Orm {
  constructor(private ox: any) {
    this.ox = ox
  }

  async execute(query: string, params?: any[]): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.ox.execute(query, params, (result: any) => {
        resolve(result)
      });
    })
  }
}

export function hexToRgb(hex: string) {
  console.log('hexToRgb', hex)
  const bigint = parseInt(hex, 16);
  console.log('bigint', bigint)
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

export const delay = async (time: number) => new Promise(resolve => setTimeout(resolve, time))

export function validateHexString(hex?: string) {
  return hex ? hex.match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i) : false
}