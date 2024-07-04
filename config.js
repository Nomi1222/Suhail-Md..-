const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Bunertc059@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/";
global.website=process.env.GURL || "https://whatsapp.com/channel/" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption | "Nomi" 


global.devs = "923319373288" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923319373288";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_59_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWZ1MzZUd0RtcVNJc2pCMTdpMzJxOFI3dEtHMXNOSmt5OE5IeURzc1RwST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTkzNzMyODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU1MTc0NTVFQUQ4RDkwQjJBRDRENDI0RjFFQ0ExODAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEyMzE4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJRE0zQkJ5R1RmcTJNbjhrTlBqbEFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyMDZmYTU3LTI2YjUtNDY2Ni1iNGRmLTM1ZDkxOWRiNGUxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyMjIsXG4gICAgICAxNjQsXG4gICAgICA3OCxcbiAgICAgIDEwLFxuICAgICAgOTIsXG4gICAgICAxMjAsXG4gICAgICAyLFxuICAgICAgNTksXG4gICAgICAyMjEsXG4gICAgICA0MyxcbiAgICAgIDExMixcbiAgICAgIDU2LFxuICAgICAgNyxcbiAgICAgIDYsXG4gICAgICAyMDYsXG4gICAgICA1MyxcbiAgICAgIDEzOCxcbiAgICAgIDE4NCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNDYsXG4gICAgICAxMzAsXG4gICAgICA0NCxcbiAgICAgIDQ4LFxuICAgICAgMTI1LFxuICAgICAgMjQ2LFxuICAgICAgMTM1LFxuICAgICAgMTkwLFxuICAgICAgOTAsXG4gICAgICAxNTYsXG4gICAgICA3MixcbiAgICAgIDE2OCxcbiAgICAgIDExMixcbiAgICAgIDEzOSxcbiAgICAgIDIyNSxcbiAgICAgIDI0NCxcbiAgICAgIDgyLFxuICAgICAgMTI5LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVQS1NMTFJMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTkzNzMyODg6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1ODYwNTkwNzk4MDY6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy9SejR3RkVLaittN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0eng3RElpZndFZFltZWQ2L05zZHBER3BqTWs4K1ZONC83cVE3cjMyM0NVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdub2kvcUNucENIS1RibEFybUJrVzRaeVc1eG8xaW4zRUp3K0MvVXZUN0hGZzdTTFZKRXVqTzBDU1dReDlES3ZhSnhmZUxqQ3Qvc0tPQzZpU1J2bEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInMwVEIxYjA5dzJQZWJRbzlqY1BYYW1OdnpnQzJLdmFRT0lzYTBpeU11QWU0TVRLREpKRFRzYTB3N3YrNFkvNXBNRExFVVF2eXhONXpBeEF3QnlQNmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxOTM3MzI4ODoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEyMzE3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU40bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjRsLmpzb24iOiAie1wia2V5RGF0YVwiOlwia0lJOGNjOWd6MXZmQjhSb2VEZjBhVm91RlBUWDc4Tk9XUTFvazlJanpJcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY4NjQ3OTE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxMjMxODU2MTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```Nomi```", //*Nomi*\n youtube.com/"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nomi",
  ownername:process.env.OWNER_NAME|| "Nomi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Nomi"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
