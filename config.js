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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRERKM0hzckVsWG05OExWaUtCenFjdmdiNnhpek9rRUY5RE9QUmJhQ0ZZMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVWxJSWVUaG9TNDZiZlhsMmdMMGJHQVwiLFxuICBcInBob25lSWRcIjogXCJhMjVlODllYS0xYjRhLTRlZTMtYmM4MS0xY2JjNjU3MDQ3MDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMjI1LFxuICAgICAgMTA4LFxuICAgICAgMjMwLFxuICAgICAgMjI1LFxuICAgICAgOTIsXG4gICAgICAxMjUsXG4gICAgICAyMzcsXG4gICAgICAxNzUsXG4gICAgICAxMzUsXG4gICAgICA4NixcbiAgICAgIDIwMixcbiAgICAgIDIwMCxcbiAgICAgIDc1LFxuICAgICAgNTcsXG4gICAgICAyNDgsXG4gICAgICAxMTUsXG4gICAgICAyNDUsXG4gICAgICAxNDgsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICA3OCxcbiAgICAgIDIsXG4gICAgICAxODMsXG4gICAgICA2MixcbiAgICAgIDk0LFxuICAgICAgMTE0LFxuICAgICAgNjUsXG4gICAgICAzLFxuICAgICAgMjM2LFxuICAgICAgMjI5LFxuICAgICAgMjAyLFxuICAgICAgMTQ2LFxuICAgICAgMTQyLFxuICAgICAgMzIsXG4gICAgICA4OSxcbiAgICAgIDQzLFxuICAgICAgODEsXG4gICAgICAxOTAsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0NSMldDR0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxOTM3MzI4ODoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODU4NjA1OTA3OTgwNjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPblJ6NHdGRUwrWm03UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInR6eDdESWlmd0VkWW1lZDYvTnNkcERHcGpNazgrVk40LzdxUTdyMzIzQ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZzgwWG5FVThqczVHUGw5OHVST0s3YmJOZHNPYU1hK0NoN1haWGFTSzhieVJ2eFBHWjNUSTk2QXhOZVZxTkd6YkQvOVFxMHpRSnNMa0ZDbEdIRXZJQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWtqeFU2SUhHYVF1TUxJLzR4cEZncERNSGY2blloYnRBQzQ5RnFxYnBKUHZvSmhRVEFRVjFwb1FzQlM4VTdCUEgyZXRJdDg5R09ITjdsM1FNTzlRQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE5MzczMjg4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTEwMjg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXVEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpbEMwa1Q0NXFocThXTndySm9oUHFPR3lhb1QyQmJzQThFSjlJeGd6bGtvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjg2NDc5MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwOTQ3ODIzMjJcIn0iCn0="  // PUT your SESSION_ID 


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
