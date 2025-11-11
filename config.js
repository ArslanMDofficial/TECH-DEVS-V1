const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtlNkFZM1FmcTR1VjhFeUFocDZabzVNSWJZNW5xRzJ4Q2pWY3N4cXcyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnE2UWI1N2xLazExbnZxUjMxbTNaSnd4cDRRSkd2UmZhaWxieHRmVmFsRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Rkh2cE9xU0ZxRDVDTVp1OTBYMjMybmRkcUFlU3dnVWk2a0lUd00vMzJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcWUvOFNjeEJveXE1eTBYdXhCUjE4Mkg4dFpuMUM0M1E0ZnZQbkRrb3c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNZ3JNdStWRzRyYkJlbDkxU0V1NVNpRUhlbXQ0UHFSOU5aWWVBQkEzV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBVHNoYnJtRUtZcFVvZHpEeDRnakFwUlROUitDOFdXOGZIakQ1VXl1WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFxTWZpZjFQVEVDYU54cmVZZEVtcnRGSnBtQ2N6Y1lIUDl2UUk2VzJHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJkYkVobTBqTzBuZnNEbnV6UnJzdHlUcThGdlpuWS9yTWNnWlZaZnhWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOREdkK1Y0VktzNlhBbGlPMDV2eWdDZmZoaHhyQXErcVluYy9ZeGFBSnRGSGl2cHdiZUJqOU9nZG1IbGhQaEJWdnlIQmZ0MUttdE9JTkh1VEQ3RUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6ImhheXFlWlQrSXdrd21LWWhsZEg0a1hFVHVjZ0xwd2JCQ1pkV21yS0R4SXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2Mzk4NDA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTc2QjZBOUYwNEYyOEIwM0FERjlGNEZCNDAxQTNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI3MjM3NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRIM0ZtRUphU3c2bWdWX1RxcG9UQnciLCJwaG9uZUlkIjoiYzMwN2I2ZWYtNGRjZC00MmE5LWFiYzItZGIyZmRhMTE2YjMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRqSnc4NHVydlRPVVIwSHVNR29mZEVYSEZ0VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdVVrRkx3VFlqVVFXOVVjNVZWVlFpU2hLTzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0JRREtGVzEiLCJtZSI6eyJpZCI6IjkyMzM0NjM5ODQwNDo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjU5MTcxOTE2MjM0Nzk5OjdAbGlkIiwibmFtZSI6IkN1dGllIPCfpbAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BPTG5PTURFS1NQeE1nR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlppUU1mQ1JDWDRaeFRrMWRtRHFOU2o4UDZpWUE0VWdna1ozK3dJVTV2Z0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFrNDQvalZxclZOZ3lqWUlLczFGaTMxbmNISmQxUVZFWEdza09sQkxpRmZLWHl4Qm1hNHMvdVlkOGJubWxGbUVSUVA0TEU4NmV2MzM2anZzVitNZkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNWFFMYXJhcTNxZDAwcmlJRHA3dS83K1c2T1lGdlo2MTlDd1VxVTdPdFhELzVYUXZJK0NINW4yQWEvRVF1QTBEbysybEd5K2J3eWhYM21sQUxjN1FEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjM5ODQwNDo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldZa0RId2tRbCtHY1U1TlhaZzZqVW8vRCtvbUFPRklJSkdkL3NDRk9iNEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjcyMzc2MSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTUgifQ==",
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
