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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAzMixcbiAgICAgICAgODksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU1LFxuICAgICAgICA4MixcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvcm43d3NvQUREbjlaWW9YVWdQVndpUDhiaDhjQzNUZ2ZiZFM2MlBDV0VBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxOTM3MzI4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTEyMjQ1ODE4NDVDNEVDN0JCMEQ2NjUwNzU4QTAyQTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDk3NzE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE5MzczMjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MThEQUQ1RTdCNzc4Mzk2QUI1REY0QzRCNjNEM0Y3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwOTc3MThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3hfVGhMNXJTNU90YWVwallQbDRqQVwiLFxuICBcInBob25lSWRcIjogXCJjNjA2MjI0Ni0xYTUwLTQ4MTAtOWE5OS0zOTNhMWQyMTRiNTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTEsXG4gICAgICAzMixcbiAgICAgIDI0NyxcbiAgICAgIDI0LFxuICAgICAgODksXG4gICAgICAyMDAsXG4gICAgICAyMSxcbiAgICAgIDI5LFxuICAgICAgMTI4LFxuICAgICAgMCxcbiAgICAgIDEzOSxcbiAgICAgIDIwOSxcbiAgICAgIDI0NCxcbiAgICAgIDE1OSxcbiAgICAgIDUzLFxuICAgICAgMjA3LFxuICAgICAgMTIsXG4gICAgICAyMTcsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxMzMsXG4gICAgICAxNjgsXG4gICAgICAxNDgsXG4gICAgICAyMzYsXG4gICAgICA0OSxcbiAgICAgIDI1MSxcbiAgICAgIDY2LFxuICAgICAgNSxcbiAgICAgIDE2OCxcbiAgICAgIDI1NSxcbiAgICAgIDU5LFxuICAgICAgOTQsXG4gICAgICAxMDQsXG4gICAgICA3MSxcbiAgICAgIDQ4LFxuICAgICAgMTIxLFxuICAgICAgMjIsXG4gICAgICA0MixcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhLVkJZNFhIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTkzNzMyODg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1ODYwNTkwNzk4MDY6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2F2YWdlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pSejR3RkVLMjNtclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0eng3RElpZndFZFltZWQ2L05zZHBER3BqTWs4K1ZONC83cVE3cjMyM0NVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9GQjFteHJpcDdiRlB1RjRZSlhDbUQvYVdpdHB1aDBhcGNuelBwc29YRUxRTzVQRS9xMnd1L01TN2d3ZDBoeUlLQzdrZ2NUaDNmRjkvRGx3OTdJL0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlk0WHc3aTZqeitxWjl1bTNLRzdyZVhEYk9ESEwxdGNxOXhsYmpic1FYZlQrNTNMUFl0RHd2QUgxRWhSamxFYXA1dmgvUE1sMXFPR00zamVEay8xUEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxOTM3MzI4ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA5NzcxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11SFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXVILmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2t1MXRVaDlOcDd0NlhxSU0ySmFZSUNNMmRQdnpVQlNGVTZNVGJUc3p2QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY4NjQ3OTEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwOTc3MTQ0NDRcIn0iCn0="  // PUT your SESSION_ID 


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
