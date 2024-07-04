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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_39_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzh0d3NJaFhtMFlEVllmMW9OY2ZyUGlYbUR2N0F0WW05dXpEY1NDcjI5OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiay11ZmFIbXBTbTJ6Zndwc0w4b3hJZ1wiLFxuICBcInBob25lSWRcIjogXCJiYzg0Yjg4OC1lYjFjLTQ4NmEtODgwYy0zOGI5ZmQ5YzgwOGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMjAxLFxuICAgICAgMzcsXG4gICAgICAxNDAsXG4gICAgICA2OSxcbiAgICAgIDE3MyxcbiAgICAgIDIwMyxcbiAgICAgIDU2LFxuICAgICAgMjUsXG4gICAgICAyMDAsXG4gICAgICAxNjUsXG4gICAgICAyMzIsXG4gICAgICAxOCxcbiAgICAgIDQxLFxuICAgICAgMTMzLFxuICAgICAgMjQzLFxuICAgICAgODUsXG4gICAgICAxMjcsXG4gICAgICAxMTEsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMjIyLFxuICAgICAgMTksXG4gICAgICAyNixcbiAgICAgIDM3LFxuICAgICAgMTI4LFxuICAgICAgMjI3LFxuICAgICAgMTcwLFxuICAgICAgMjAxLFxuICAgICAgNzMsXG4gICAgICAxOSxcbiAgICAgIDE3NSxcbiAgICAgIDEwMSxcbiAgICAgIDgzLFxuICAgICAgMjYsXG4gICAgICAxNjcsXG4gICAgICA0MixcbiAgICAgIDQ5LFxuICAgICAgNTYsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJIR1FWWjU0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTkzNzMyODg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1ODYwNTkwNzk4MDY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT25SejR3RkVQL25tclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0eng3RElpZndFZFltZWQ2L05zZHBER3BqTWs4K1ZONC83cVE3cjMyM0NVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllHRW1ObjRETVRwOW1sYjFRUENycDl1ZUV4U3FaOW1xdXJ2eWNWL2FnWmtUMC9tclVDK1lwSjE5Nm5hRmE2M1hxZGV1NGNLMFJBN2o0b2E0V1llbENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkcvTnhlTDBIS1I4SHpEQjJTRXM3NktKUWk3QnVvTjNIeXVWakpXYlJMWVUxbWhNMFU1M1JqYTlmbStFbWhIM0tkUk9rVW5aUFc5TjhMUFBrc2FSQ0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxOTM3MzI4ODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwMzkzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXVELmpzb24iOiAie1wia2V5RGF0YVwiOlwiaWxDMGtUNDVxaHE4V053ckpvaFBxT0d5YW9UMkJic0E4RUo5SXhnemxrbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY4NjQ3OTA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMDk0NzgyMzIyXCJ9Igp9"  // PUT your SESSION_ID 


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
