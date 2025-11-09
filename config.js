const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Q0cU1GK09GWmxKVy9qNVhndG9ESjd2eDVmQS9ZclVpdDliT0hiRUduUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhoTlJBYkhvMktLYkxRMW14RExMS0lUWEErWFRSeFFiRGZRcm90VVlVdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQjNsTmIwWEFJSzFNVmVDbWQwa2dUd3VJN0FTRFFaeEc2REt1UXc5ZjBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmVW83K1RFRFRJdkgxMnB3OVhyNDVJTVlOY09SRmkvQlcyYk1tMDhJSmo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBZEhMU2VSelIrbG9XTXptclFsU2RDN1RpZlBHR3ZqOW81YnJyQ2U4MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh2SlJ5NmRHTk45SnA4WU9yelVtaGo1dmgxWkZPRFFvNllPNlE1T3V6Rkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0k5b0kxaXJMYlNEV0gvZFJDb3NXcUJMWEtOR0FEK3VDWXVtcDgzblFWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0pFZVY0S25Ddk4ycTJoaWNON2ZOMkwwSlVXa0xGRTdPNjExeDg4RWZpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFPY1NHZkRGYmZ1MVlZZUw3UmdwbFN3bnkwM3VHaElqcnU4a1NjMEsrc2FUdDdtdkxZdFdzMGlaQVlDMjBzWXRtYllsZ3F0M3YrUWhDV1BSUGh2bkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiIrc2ZGeE16b2xEUmc3QVFERkc3WGVIYTNyWW5RZFVJSFVSbjlva01rRXRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkzNzAwNzY1MzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDODQ1MEYxRkI2QkVCOUQ2RTcwNEFDMThDRUVCMTlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI3MjAwMzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InQ3bDQ4M1l3VGt1YzFucER0WTVuWXciLCJwaG9uZUlkIjoiN2NlNTE2YjktMWNkOS00N2U4LWFiMDEtOTc4MWI2ZDRjMzI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBHSGdnNlk2eWp1WURjdlhEZjBCT3VDdklhOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhOGE5cXZ5dXhnYzd5ZzJtR1VtSXl1KysxcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjNTRTZSQzYiLCJtZSI6eyJpZCI6IjkzNzAwNzY1MzE3OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDEzMjI5NjgxNjIzODI6MUBsaWQiLCJuYW1lIjoiQW1iYiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0dtcU5BRkVKTHl3OGdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieXJ2U3NGQUcxZExKT3ZHZ3NNb2RZQ1lZam1tVUdTb0VoYVlxeU5PVTBVWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibVNWRndIaW4raW1Pc1ZDeVRrbERPUlBrS2dITHNobHJ4Q0o3ZjRFYThMUVpHR3BSVkpvR0I2OFhmTHRxSGlVQjcya0pnL2gyQndrUlJicHMreUpTREE9PSIsImRldmljZVNpZ25hdHVyZSI6InozWmoxYWQrdStWeUozakFpaEhqMUlzanQxUXRzSzBSakx3NHM3RUxHL1Y4d1JJa3hoZHI5STF2UW5wbXY0ejBXQzdCSVRBN205eFUvK0FTVCtsSEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTM3MDA3NjUzMTc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcTcwckJRQnRYU3lUcnhvTERLSFdBbUdJNXBsQmtxQklXbUtzalRsTkZHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0FnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjI3MjAwMzIsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUJ4In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
//anticall on/off
   ANTI_CALL: process.env.ANTI_CALL || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*ꜱᴇᴇɴ ʏᴏᴜʀ ꜱᴛᴀᴛᴜꜱ ʙʏ 𝐎𝐌𝐄𝐇 𝐌𝐃*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete    
AUTO_BIO: process.env.AUTO_BIO || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/prnbmn.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ",",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝕆𝕄𝔼ℍ-𝕄𝔻-𝕍1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕆𝕄𝔼ℍ-𝕄𝔻-𝕍1",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself
OWNER_NUMBER: process.env.OWNER_NUMBER || "263718036108",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐎𝐌𝐄𝐇 𝐌𝐃",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "> © POWERED 𝐎𝐌𝐄𝐇 𝐌𝐃 ᴛᴇᴄʜ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/prnbmn.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Powered by 𝐎𝐌𝐄𝐇 𝐌𝐃",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// make true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263718036108",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
