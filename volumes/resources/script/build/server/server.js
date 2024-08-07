"use strict";(()=>{var h=Object.defineProperty;var m=(o,e,r)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var u=(o,e,r)=>(m(o,typeof e!="symbol"?e+"":e,r),r);var a=class o{constructor(e,r,t,s,n){this.name=e;this.model=r;this.price=t;this.category=s;this.image=n}static create({name:e,model:r,price:t,category:s}){return new o(e,r,t,s,`https://docs.fivem.net/vehicles/${r}.webp`)}};var i=class o{constructor(e,r,t,s,n,g,p,d,b){this.id=e;this.name=r;this.model=t;this.price=s;this.category=n;this.image=g;this.primaryColor=p;this.secondaryColor=d;this.plate=b}static create({name:e,model:r,price:t,category:s,primaryColor:n,secondaryColor:g,plate:p}){return new o(new Date().getTime().toString(36),e,r,t,s,`https://docs.fivem.net/vehicles/${r}.webp`,n,g,p)}primaryColorRGB(){return this.hexToRgb(this.primaryColor)}secondaryColorRGB(){return this.hexToRgb(this.secondaryColor)}hexToRgb(e){let r=parseInt(e.slice(1),16),t=r>>16&255,s=r>>8&255,n=r&255;return{r:t,g:s,b:n}}};var l=class{constructor(e){this.ox=e;this.ox=e}async execute(e,r){return new Promise((t,s)=>{this.ox.execute(e,r,n=>{t(n)})})}};var y=class{constructor(e){this.ox=e;u(this,"orm");this.orm=new l(this.ox)}async getVehicleByModel(e){try{let r=await this.orm.execute("SELECT * FROM vehicles WHERE model = ?",[e]);return a.create(r[0])}catch(r){throw new Error(r)}}async getVehicles(){try{return(await this.orm.execute("SELECT * FROM vehicles")).map(a.create)}catch(e){throw new Error(e)}}async getVehiclesByCategory(e){try{return(await this.orm.execute("SELECT * FROM vehicles WHERE category = ?",[e])).map(a.create)}catch(r){throw new Error(r)}}async getPersonalVehicles(e){try{return(await this.orm.execute(`
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
          p.created_at DESC`,[e])).map(t=>i.create({name:t.name,model:t.model,price:t.price,category:t.category,primaryColor:t.primary_color,secondaryColor:t.secondary_color,plate:t.plate}))}catch(r){throw new Error(r)}}async createPlayerVehicle(e,r){try{await this.orm.execute(`
        INSERT INTO 
          personal_vehicles (id, player_id, model, primary_color, secondary_color, plate) 
        VALUES 
          (?, ?, ?, ?, ?, ?)`,[e.id,r,e.model,e.primaryColor,e.secondaryColor,e.plate])}catch(t){throw new Error(t)}}};var c=new y(global.exports.oxmysql);onNet("getVehicles",async()=>{let o=global.source,e=await c.getVehicles();emitNet("getVehiclesResponse",o,e)});onNet("getVehiclesByCategory",async o=>{let e=global.source,r=await c.getVehiclesByCategory(o);emitNet("getVehiclesByCategoryResponse",e,r)});onNet("getVehicleByModel",async o=>{let e=global.source,r=await c.getVehicleByModel(o);emitNet("getVehicleByModelResponse",e,r)});onNet("buyVehicle",async o=>{let e=global.source,t=getPlayerIdentifiers(e)[1];await c.createPlayerVehicle(o,t),emitNet("buyVehicleResponse",e,{success:!0,message:"Vehicle bought"})});onNet("getPersonalVehicles",async()=>{let o=global.source,r=getPlayerIdentifiers(o)[1],t=await c.getPersonalVehicles(r);emitNet("getPersonalVehiclesResponse",o,t)});})();
