(()=>{var t="config.json",i=LoadResourceFile(GetCurrentResourceName(),t),s;if(i!==null)try{s=JSON.parse(i)}catch(n){console.error(`Error parsing config file: ${n}`)}else console.error(`Config file not found: ${t}`);function a(n,e){RegisterNuiCallbackType(n),on(`__cfx_nui:${n}`,async o=>{let r=await e(o);SendNuiMessage(JSON.stringify(r))}),onNet(`${n}Response`,async o=>{SendNuiMessage(JSON.stringify({action:n,data:o}))})}})();