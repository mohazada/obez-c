//ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752
//ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752
//ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752
//ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752
//ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752
//ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752ALzahrani#4752
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://123321321321.glitch.me`);  
}, 280000);

const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); 
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const request = require("request");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");




//ALzahrani#4752

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
console.log("==================================");
console.log("ALzahrani#4752");
console.log("ALzahrani#4752");
console.log("ALzahrani#4752");
console.log("=========> Bot Online <=========");
console.log("=======> Token Bot **** <=======");
console.log("ALzahrani#4752");
console.log("ALzahrani#4752");
console.log("ALzahrani#4752");
console.log("====================================");
console.log("Bot Online 24/7");



client.on("message", message => {
            if (message.content.startsWith(prefix + "sug")) {
if(message.channel.id !== `750042552480039049`) return message.channel.send(`**:warning:  You Are not in the correct room **`).then(m => m.delete(5000));///By ALzahrani#4752
if (message.author.bot) return;///By ALzahrani#4752
    if (!message.guild)///By ALzahrani#4752
      return message.reply("**:x: This Commands Just In Server**").then(v => {///By ALzahrani#4752
        v.react(":x:");///By ALzahrani#4752
      });///By ALzahrani#4752
    var args = message.content///By ALzahrani#4752
      .split(" ")///By ALzahrani#4752
      .slice(1)///By ALzahrani#4752
      .join(" ");///By ALzahrani#4752
    if (!args)///By ALzahrani#4752
      return message.reply("Type You Suggestion").then(c => {///By ALzahrani#4752
        c.delete(5000);///By ALzahrani#4752
      });///By ALzahrani#4752
    let Room = message.guild.channels.find(`name`, "𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐞𝐬-𝐭𝐨-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬");///By ALzahrani#4752
    if (!Room)///By ALzahrani#4752
      return message.channel///By ALzahrani#4752
        .send("Can't find suggestions channel.")///By ALzahrani#4752
        .then(d => d.react(":x:"));///By ALzahrani#4752
message.channel.send("☑️ |Thanks for your suggestion Your Suggestions has been sent to this channel 𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐞𝐬-𝐭𝐨-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬") ///By ALzahrani#4752
    let embed = new Discord.RichEmbed()///By ALzahrani#4752
      .setColor("RANDOM")///By ALzahrani#4752
      .setAuthor(///By ALzahrani#4752
        `Vote on ${message.author.username}'s suggestion`,///By ALzahrani#4752
        message.author.avatarURL///By ALzahrani#4752
      )///By ALzahrani#4752
      .addField("**Suggestion**", `${args}`)///By ALzahrani#4752
      .setThumbnail(message.author.avatarURL)///By ALzahrani#4752
      .setFooter(`ID: ${message.author.id}`);///By ALzahrani#4752
    Room.sendEmbed(embed)///By ALzahrani#4752
      .then(c => {///By ALzahrani#4752
        c.react(":white_check_mark:").then(() => c.react(":x:"));///By ALzahrani#4752
      })///By ALzahrani#4752
///By ALzahrani#4752
      .catch(e => console.error(e));///By ALzahrani#4752
   message.delete(); ///By ALzahrani#4752
 }///By ALzahrani#4752///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752///By ALzahrani#4752
client.on("message", async message => {///By ALzahrani#4752
  if (message.content.startsWith(prefix + "setmember")) {///By ALzahrani#4752
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))///By ALzahrani#4752
      return message.reply("❌ **لا تمتلك صلاحيه**");///By ALzahrani#4752
    if (///By ALzahrani#4752
      !message.guild///By ALzahrani#4752
        .member(client.user)///By ALzahrani#4752
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])///By ALzahrani#4752
    )///By ALzahrani#4752
      return message.reply("❌ **لا امتلك صلاحيه**");///By ALzahrani#4752
    message.channel.send("✅| **تم عمل الروم بنجاح**");///By ALzahrani#4752
    message.guild///By ALzahrani#4752
      .createChannel(`All Members: ${message.guild.members.size}`, "voice")///By ALzahrani#4752
      .then(c => {///By ALzahrani#4752
        console.log(`Done make room in: \n ${message.guild.name}`);///By ALzahrani#4752
        c.overwritePermissions(message.guild.id, {///By ALzahrani#4752
          CONNECT: false,///By ALzahrani#4752
          SPEAK: false///By ALzahrani#4752
        });///By ALzahrani#4752
        setInterval(() => {///By ALzahrani#4752
          c.setName(`All Members: ${message.guild.members.size}`);///By ALzahrani#4752
        }, 1000);///By ALzahrani#4752
      });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", async message => {///By ALzahrani#4752
  if (message.content.startsWith(prefix + "setmembers")) {///By ALzahrani#4752
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))///By ALzahrani#4752
      return message.reply("❌ **لا تمتلك صلاحيه**");///By ALzahrani#4752
    if (///By ALzahrani#4752
      !message.guild///By ALzahrani#4752
        .member(client.user)///By ALzahrani#4752
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])///By ALzahrani#4752
    )///By ALzahrani#4752
      return message.reply("❌ **لا امتلك صلاحيه**");///By ALzahrani#4752
    message.channel.send("✅| **تم عمل الروم بنجاح**");///By ALzahrani#4752
    message.guild///By ALzahrani#4752
      .createChannel(`Members: ${message.guild.members.filter(m => !m.user.bot).size}`, "voice")///By ALzahrani#4752
      .then(c => {///By ALzahrani#4752
        console.log(`Done make room in: \n ${message.guild.name}`);///By ALzahrani#4752
        c.overwritePermissions(message.guild.id, {///By ALzahrani#4752
          CONNECT: false,///By ALzahrani#4752
          SPEAK: false///By ALzahrani#4752
        });///By ALzahrani#4752
        setInterval(() => {///By ALzahrani#4752
          c.setName(`Members: ${message.guild.members.filter(m => !m.user.bot).size}`);///By ALzahrani#4752
        }, 1000);///By ALzahrani#4752
      });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", async message => {///By ALzahrani#4752
  if (message.content.startsWith(prefix + "setbots")) {///By ALzahrani#4752
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))///By ALzahrani#4752
      return message.reply("❌ **لا تمتلك صلاحيه**");///By ALzahrani#4752
    if (///By ALzahrani#4752
      !message.guild///By ALzahrani#4752
        .member(client.user)///By ALzahrani#4752
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])///By ALzahrani#4752
    )///By ALzahrani#4752
      return message.reply("❌ **لا امتلك صلاحيه**");///By ALzahrani#4752
    message.channel.send("✅| **تم عمل الروم بنجاح**");///By ALzahrani#4752
    message.guild///By ALzahrani#4752
      .createChannel(`Bots: ${message.guild.members.filter(member => member.user.bot).size}`, "voice")///By ALzahrani#4752
      .then(c => {///By ALzahrani#4752
        console.log(`Done make room in: \n ${message.guild.name}`);///By ALzahrani#4752
        c.overwritePermissions(message.guild.id, {///By ALzahrani#4752
          CONNECT: false,///By ALzahrani#4752
          SPEAK: false///By ALzahrani#4752
        });///By ALzahrani#4752
        setInterval(() => {///By ALzahrani#4752
          c.setName(`Bots: ${message.guild.members.filter(member => member.user.bot).size}`);///By ALzahrani#4752
        }, 1000);///By ALzahrani#4752
      });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  message.channel.id == "750266888143241246" ? message.react("✅") : null;///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  message.channel.id == "750266888143241246" ? message.react("❌") : null;///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752


///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
if(message.content.startsWith('تفعيل')) {///By ALzahrani#4752
if(message.channel.id !== `750296873042051072`) return message.channel.send(`**:warning:  You Are not in the correct room **`).then(m => m.delete(5000));///By ALzahrani#4752
if(!message.channel.guild) return message.channel.send('**This is only for servers | :warning: **').then(m => m.delete(5000));///By ALzahrani#4752
message.member.addRole(message.guild.roles.find(role => role.name === '𝐌𝐞𝐦𝐛𝐞𝐫𝐬'));///By ALzahrani#4752
message.reply('تم تفعيلك').then(m => m.delete(5000));///By ALzahrani#4752
///By ALzahrani#4752
}}); ///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
if(message.content.startsWith('verfiy')) {///By ALzahrani#4752
if(message.channel.id !== `750296873042051072`) return message.channel.send(`**:warning:  You Are not in the correct room **`).then(m => m.delete(5000));///By ALzahrani#4752
if(!message.channel.guild) return message.channel.send('**This is only for servers | :warning: **').then(m => m.delete(5000));///By ALzahrani#4752
message.member.addRole(message.guild.roles.find(role => role.name === '𝐌𝐞𝐦𝐛𝐞𝐫𝐬'));///By ALzahrani#4752
message.reply('تم تفعيلك').then(m => m.delete(5000));///By ALzahrani#4752
///By ALzahrani#4752
}}); ///By ALzahrani#4752



///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on('ready', () => {///By ALzahrani#4752
console.log(`servers: [ " ${client.guilds.size} " ] Users: [ " ${client.users.size} " ]`);///By ALzahrani#4752
let st = ["<3"];///By ALzahrani#4752
setInterval(function() {///By ALzahrani#4752
  client.user.setGame(`=help`, 'https://www.twitch.tv/obez_rixey')///By ALzahrani#4752
  let status = st[Math.floor(Math.random() * st.length)];///By ALzahrani#4752
  client.user.setActivity(status, "https://www.twitch.tv/obez_rixey"); ///By ALzahrani#4752
}, 2000)///By ALzahrani#4752
})




client.on('ready', () => {
console.log(`servers: [ " ${client.guilds.size} " ] Users: [ " ${client.users.size} " ]`);
let st = ["prefix [=]"];
setInterval(function() {
  client.user.setGame(`Obez Clan`, 'https://www.twitch.tv/obez_rixey')
  let status = st[Math.floor(Math.random() * st.length)];
  client.user.setActivity(status, "https://www.twitch.tv/obez_rixey"); ///By ALzahrani#4752
}, 2000)///By ALzahrani#4752
})///By ALzahrani#4752


///
//الاكواد

///By ALzahrani#4752
client.on('ready', () => {///By ALzahrani#4752
   console.log(`----------------`);///By ALzahrani#4752
      console.log(`ALzahrani Bot`);///By ALzahrani#4752
        console.log(`----------------`);///By ALzahrani#4752
      console.log(`ON ${client.guilds.size} Servers ' Script By : ALzahrani -_- ' `);///By ALzahrani#4752
    console.log(`----------------`);///By ALzahrani#4752
  console.log(`Logged in as ${client.user.tag}!`);///By ALzahrani#4752
client.user.setGame(`By ALzahrani#4752`,"http://twitch.tv/obez_rixey")///By ALzahrani#4752
client.user.setStatus("onl")///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("guildMemberAdd", member => {///By ALzahrani#4752
  let id = member.user.id;///By ALzahrani#4752
  let m = member.user;///By ALzahrani#4752
  var embed = new Discord.RichEmbed()///By ALzahrani#4752
    .setThumbnail(m.avatarURL)///By ALzahrani#4752
    .setImage("https://cdn.glitch.com/900081ee-af24-48a3-8783-2f8d4b10f9f5%2F90283290-e361-4dc8-9c65-352ddea79a56.image.png?v=1598950902149")///By ALzahrani#4752
    .addField(///By ALzahrani#4752
      `Member Name`,///By ALzahrani#4752
      `<@${id}>`///By ALzahrani#4752
    )///By ALzahrani#4752
    .addField(" **__Welcome To Server__**", `**${member.guild.name}**`)///By ALzahrani#4752
    .addField("**__Your Member Number__** ", `${member.guild.memberCount} `)///By ALzahrani#4752
    .setColor("RANDOM");///By ALzahrani#4752
  var channel = member.guild.channels.find("name", "→✨𝐖𝐞𝐥𝐜𝐨𝐦𝐞"); ////By ALzahrani#4752///By ALzahrani#4752
  if (!channel) return;///By ALzahrani#4752
  channel.send({ embed: embed });///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752

client.on("message", m => {
if(m.content === "verfiy") {
m.delete(10);
}
});

client.on("message", m => {
if(m.content === "discord.gg") {
m.delete(10);
}
});


client.on("message", m => {
if(m.content === "تفعيل") {
m.delete(10);
}
});
///By ALzahrani#4752


///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.channel.type == "dm") {///By ALzahrani#4752
let embed = new Discord.RichEmbed()///By ALzahrani#4752
  .setTitle("!New Message")///By ALzahrani#4752
  .setThumbnail(message.author.avatarURL)///By ALzahrani#4752
  .setDescription(`
**By : \n\`${message.author.tag}\`
ID : \n\`${message.author.id}\`
Message : \n\`${message.content}\`**`)///By ALzahrani#4752
 .setTimestamp()///By ALzahrani#4752
  client.channels.get('728929790652055652').send(embed)///By ALzahrani#4752
}});///By ALzahrani#4752

///By ALzahrani#4752
///By ALzahrani#4752

///By ALzahrani#4752
///By ALzahrani#4752
client.on('message', message => {///By ALzahrani#4752
    var argresult = message.content.split(` `).slice(1).join(' ');///By ALzahrani#4752
      if (!developers.includes(message.author.id)) return;///By ALzahrani#4752
     ///By ALzahrani#4752
  if (message.content.startsWith(prefix + 'setg')) {///By ALzahrani#4752
    client.user.setGame(argresult);///By ALzahrani#4752
      message.channel.send(`**✅   ${argresult}**`)///By ALzahrani#4752
  } else///By ALzahrani#4752
     if (message.content === (prefix + "leave")) {///By ALzahrani#4752
    message.guild.leave();  ///By ALzahrani#4752
  } else  ///By ALzahrani#4752
  if (message.content.startsWith(prefix + 'setw')) {///By ALzahrani#4752
  client.user.setActivity(argresult, {type:'WATCHING'});///By ALzahrani#4752
      message.channel.send(`**✅   ${argresult}**`)///By ALzahrani#4752
  } else///By ALzahrani#4752
  if (message.content.startsWith(prefix + 'setl')) {///By ALzahrani#4752
  client.user.setActivity(argresult , {type:'LISTENING'});///By ALzahrani#4752
      message.channel.send(`**✅   ${argresult}**`)///By ALzahrani#4752
  } else///By ALzahrani#4752
  if (message.content.startsWith(prefix + 'sets')) {///By ALzahrani#4752
    client.user.setGame(argresult, "https://www.twitch.tv/M0_zahrani");///By ALzahrani#4752
      message.channel.send(`**✅**`)///By ALzahrani#4752
  }///By ALzahrani#4752
  if (message.content.startsWith(prefix + 'setname')) {///By ALzahrani#4752
  client.user.setUsername(argresult).then///By ALzahrani#4752
      message.channel.send(`Changing The Name To ..**${argresult}** `)///By ALzahrani#4752
} else///By ALzahrani#4752
  if (message.content.startsWith(prefix + 'setprefix')) {///By ALzahrani#4752
  client.user.setPrefix(argresult).then///By ALzahrani#4752
      message.channel.send(`Changing Prefix ..**${argresult}** `)///By ALzahrani#4752
} else///By ALzahrani#4752
if (message.content.startsWith(prefix + 'setavatar')) {///By ALzahrani#4752
  client.user.setAvatar(argresult);///By ALzahrani#4752
    message.channel.send(`Changing The Avatar To :**${argresult}** `);///By ALzahrani#4752
}///By ALzahrani#4752
});///By ALzahrani#4752


// كود رولات الاعضاء
///By ALzahrani#4752
client.on('message', msg => {///By ALzahrani#4752
 if(!msg.channel.guild) return;///By ALzahrani#4752
        let user = msg.guild.member (msg.mentions.members.first() || msg.author);///By ALzahrani#4752
 if (msg.content.startsWith(prefix + 'myroles')) {///By ALzahrani#4752
    const ALzahrani = new Discord.RichEmbed()///By ALzahrani#4752
.setThumbnail(msg.author.avatarURL)///By ALzahrani#4752
.setColor('#0099ff')///By ALzahrani#4752
.setTitle ('رتب المستخدم')///By ALzahrani#4752
.addField ("الرتب: ", user.roles.filter (r => r.name !== "@everyone").map (m =>"<@&" +m.id+">").join("\n"), true)///By ALzahrani#4752
msg.channel.send(ALzahrani)///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752


///By ALzahrani#4752
///By ALzahrani#4752


///By ALzahrani#4752

/*
///By ALzahrani#4752

// كود ازعاج البوت
//off///By ALzahrani#4752
///By ALzahrani#4752
  client.on('message', message => {///By ALzahrani#4752
  var mentionbot = [
    `<@${message.author.id}>,`,///By ALzahrani#4752
    `<@${message.author.id}>,    `///By ALzahrani#4752
  ]   ///By ALzahrani#4752
    if (message.author.bot) return;///By ALzahrani#4752
    if (message.isMentioned(client.user))///By ALzahrani#4752
///By ALzahrani#4752
message.channel.send(`${mentionbot[Math.floor(Math.random() * mentionbot.length)]}`);///By ALzahrani#4752
///By ALzahrani#4752
});///By ALzahrani#4752


///By ALzahrani#4752

*/
///By ALzahrani#4752



///By ALzahrani#4752




///By ALzahrani#4752



///By ALzahrani#4752









// كود قفل وفتح الشات
///By ALzahrani#4752
 client.on('message', message => { ///By ALzahrani#4752
      if(message.content ===  "l") {///By ALzahrani#4752
      if(!message.channel.guild) return;///By ALzahrani#4752
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك صلاحيات');///By ALzahrani#4752
             message.channel.overwritePermissions(message.guild.id, {///By ALzahrani#4752
             SEND_MESSAGES: false///By ALzahrani#4752
 })///By ALzahrani#4752
              message.channel.send('تم قفل الشات للروم **${msg.channel.name}**.') ///By ALzahrani#4752
 }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on('message', message => {///By ALzahrani#4752
      if(message.content === "ul") {///By ALzahrani#4752
      if(!message.channel.guild) return;///By ALzahrani#4752
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك صلاحيات');///By ALzahrani#4752
             message.channel.overwritePermissions(message.guild.id, {///By ALzahrani#4752
             SEND_MESSAGES: true///By ALzahrani#4752
 })///By ALzahrani#4752
              message.channel.send('تم فتح الشات للروم **${msg.channel.name}**.')///By ALzahrani#4752
 }///By ALzahrani#4752
}); ///By ALzahrani#4752




///By ALzahrani#4752





///By ALzahrani#4752




///By ALzahrani#4752



///By ALzahrani#4752




///By ALzahrani#4752

///By ALzahrani#4752




///By ALzahrani#4752


///By ALzahrani#4752



///By ALzahrani#4752




///By ALzahrani#4752





///By ALzahrani#4752






// كود وقت دخولك السيرفر
///By ALzahrani#4752
client.on("message", async message => {///By ALzahrani#4752
  let args = message.content.split(" ");///By ALzahrani#4752
      const ms = new Date().getTime() - message.member.joinedAt.getTime();///By ALzahrani#4752
  var seconds = parseInt((ms/1000)%60)///By ALzahrani#4752
    , minutes = parseInt((ms/(1000*60))%60)///By ALzahrani#4752
    , hours = parseInt((ms/(1000*60*60))%24);///By ALzahrani#4752
  const now = new Date(); ///By ALzahrani#4752
  const joinedAt = ms / 1000 / 60 / 60 / 24; ///By ALzahrani#4752
  if (args[0] === prefix + "since") {///By ALzahrani#4752
    let embed = new Discord.RichEmbed()///By ALzahrani#4752
    .setTitle(message.author.username)///By ALzahrani#4752
    .addField("> Since:", `
⏲️قبل ${joinedAt.toFixed(0)} يوم ,
 و ${hours} ساعات ,
 و ${minutes} دقيقة ,
 و ${seconds} ثانية ⏲️`)///By ALzahrani#4752
    .setTimestamp()///By ALzahrani#4752
    .setThumbnail(message.author.avatarURL);///By ALzahrani#4752
message.channel.send(embed)///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752



///By ALzahrani#4752


// كود الافاتار
///By ALzahrani#4752
client.on("message",message => {///By ALzahrani#4752
if(message.author.bot) return;///By ALzahrani#4752
if(!message.content.startsWith(prefix)) return;///By ALzahrani#4752
  if(message.content.startsWith(prefix + "avatar")){///By ALzahrani#4752
const mention = message.mentions.users.first()///By ALzahrani#4752
///By ALzahrani#4752
if(!mention) return console.log("") ///By ALzahrani#4752
let embed = new Discord.RichEmbed()///By ALzahrani#4752
.setColor("BLACK")///By ALzahrani#4752
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) .setTitle("Avatar Link")///By ALzahrani#4752
.setURL(`${mention.avatarURL}`)///By ALzahrani#4752
.setImage(`${mention.avatarURL}`)///By ALzahrani#4752
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)   ///By ALzahrani#4752 
    message.channel.send(embed)///By ALzahrani#4752
}///By ALzahrani#4752
})///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if(message.author.bot) return;///By ALzahrani#4752
  if(!message.content.startsWith(prefix)) return;///By ALzahrani#4752
  if(message.content.startsWith(prefix + "avatar server")) {///By ALzahrani#4752
    let doma = new Discord.RichEmbed()///By ALzahrani#4752
    .setColor("BLACK")///By ALzahrani#4752
    .setAuthor(message.guild.name, message.guild.iconURL)///By ALzahrani#4752
    .setTitle("Avatar Link")///By ALzahrani#4752
    .setURL(message.guild.iconURL)///By ALzahrani#4752
    .setImage(message.guild.iconURL)///By ALzahrani#4752
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)///By ALzahrani#4752
    message.channel.send(doma)///By ALzahrani#4752
  } else if(message.content.startsWith(prefix + "avatar")) {///By ALzahrani#4752
    let args = message.content.split(" ")[1]///By ALzahrani#4752
var avt = args || message.author.id;    ///By ALzahrani#4752
    client.fetchUser(avt).then(user => {///By ALzahrani#4752
     avt = user;///By ALzahrani#4752
  let embed = new Discord.RichEmbed() ///By ALzahrani#4752
  .setColor("BLACK")///By ALzahrani#4752
  .setAuthor(`${avt.tag}`, avt.avatarURL)///By ALzahrani#4752
  .setTitle("Avatar Link")///By ALzahrani#4752
  .setURL(avt.avatarURL)///By ALzahrani#4752
  .setImage(avt.avatarURL)///By ALzahrani#4752
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)///By ALzahrani#4752
  message.channel.send(embed) ///By ALzahrani#4752
    })///By ALzahrani#4752
  }///By ALzahrani#4752
})///By ALzahrani#4752
///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752

//كود سيرفر
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on('message', function(msg) {///By ALzahrani#4752
    if(msg.content == prefix  + 'server') {///By ALzahrani#4752
      let embed = new Discord.RichEmbed()///By ALzahrani#4752
      .setColor('000000')///By ALzahrani#4752
      .setThumbnail(msg.guild.iconURL)///By ALzahrani#4752
      .setTitle(`معلومات سيرفر  **${msg.guild.name}**`)///By ALzahrani#4752
      .addField('**»** **__Region__ :**',`» [** ${msg.guild.region} **]`,true)///By ALzahrani#4752
      .addField('**»** **__Roles __:**',`» [** ${msg.guild.roles.size} **]`,true)///By ALzahrani#4752
      .addField('**»** **__Members __:**',`» [** ${msg.guild.memberCount} **]`,true)///By ALzahrani#4752
      .addField('**»** **__Online Members__ :**',`» [** ${msg.guild.members.filter(m => m.presence.status == 'online').size} **]`,true)///By ALzahrani#4752
      .addField('**»** **__Text Channels __:**',`» [** ${msg.guild.channels.filter(m => m.type === 'text').size}** ]`,true)///By ALzahrani#4752
      .addField('**»** **__Voice Channels__ :**',`» [** ${msg.guild.channels.filter(m => m.type === 'voice').size} **]`,true)///By ALzahrani#4752
      .addField('**»** **__Owner __:**',`» **[ ${msg.guild.owner} ]**`,true)///By ALzahrani#4752
      .addField('**»** **__ID Server__ :**',`» **[ ${msg.guild.id} ]**`,true)///By ALzahrani#4752
      .addField('**»** **__Created IN __:**', msg.guild.createdAt.toLocaleString())///By ALzahrani#4752
      msg.channel.send({embed:embed});///By ALzahrani#4752
    }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752

///By ALzahrani#4752
///By ALzahrani#4752

///By ALzahrani#4752
///By ALzahrani#4752

//كود معلومات البوت
///By ALzahrani#4752
///By ALzahrani#4752
 client.on('message', message => {///By ALzahrani#4752
    if (message.content == prefix + "bot") {///By ALzahrani#4752
    message.channel.send({///By ALzahrani#4752
        embed: new Discord.RichEmbed()///By ALzahrani#4752
            .setAuthor(client.user.username,client.user.avatarURL)///By ALzahrani#4752
            .setThumbnail(client.user.avatarURL)///By ALzahrani#4752
            .setColor('000000')///By ALzahrani#4752
            .setTitle('**معلومات البوت**')///By ALzahrani#4752
            .addField('**»** **__Ping__ :**' , [`» [ ${Date.now() - message.createdTimestamp} ]` + 'MS' ], true)///By ALzahrani#4752
            .addField('**»** **__Servers__ :**', `» [ ${client.guilds.size} ]`, true)///By ALzahrani#4752
            .addField('**»** **__Channels__ :**' , `»  [ ${client.channels.size} ] ` , true)///By ALzahrani#4752
            .addField('**»** **__Users__ :**' ,`»  [ ${client.users.size} ]` , true)///By ALzahrani#4752
            .addField('**»** **__Name__ :**' , `»  [ ${client.user.tag} ] ` , true)///By ALzahrani#4752
            .addField('**»** **__ID __:**' , `»  ${client.user.id} ` , true)///By ALzahrani#4752
			      .addField('**»** **__Prefix __:**' , `» [ = ]` , true)///By ALzahrani#4752
            .addField('**»** |** __Owner Bot__** :' , `» <@611183083982553098>` , true) ///By ALzahrani#4752
    })///By ALzahrani#4752
    ///By ALzahrani#4752
}///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752

//كود معلومات دخول السيرفر
///By ALzahrani#4752
client.on("message", async message => {///By ALzahrani#4752
  if (message.content.startsWith(prefix + "inf")) {///By ALzahrani#4752
    let oi = message.mentions.users.first()///By ALzahrani#4752
      ? message.mentions.users.first().id///By ALzahrani#4752
      : message.author.id;///By ALzahrani#4752
    let Tag = message.mentions.users.first()///By ALzahrani#4752
      ? message.mentions.users.first().tag///By ALzahrani#4752
      : message.author.tag;///By ALzahrani#4752
    let Username = message.mentions.users.first()///By ALzahrani#4752
      ? message.mentions.users.first().username///By ALzahrani#4752
      : message.author.username;///By ALzahrani#4752
    let Avatar = message.mentions.users.first()///By ALzahrani#4752
      ? message.mentions.users.first().avatarURL///By ALzahrani#4752
      : message.author.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    message.guild.fetchInvites().then(invs => {///By ALzahrani#4752
      let member = client.guilds.get(message.guild.id).members.get(oi);///By ALzahrani#4752
      let personalInvites = invs.filter(i => i.inviter.id === oi);///By ALzahrani#4752
      let urll = invs.filter(i => i.inviter.id === oi);///By ALzahrani#4752
      let link = urll.reduce(///By ALzahrani#4752
        (p, v) =>///By ALzahrani#4752
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,///By ALzahrani#4752
        `\nServidor: ${message.guild.name} \n `///By ALzahrani#4752
      );///By ALzahrani#4752
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);///By ALzahrani#4752
      let inviteCode = personalInvites.reduce((p, v) => v.code);///By ALzahrani#4752
      let possibleInvites = [["Total de membros recrutados:"]];///By ALzahrani#4752
      possibleInvites.push([inviteCount, inviteCode]);///By ALzahrani#4752
      let user = message.mentions.users.first() || message.author;///By ALzahrani#4752
      let mem = message.guild.member(user);///By ALzahrani#4752
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();///By ALzahrani#4752
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;///By ALzahrani#4752
///By ALzahrani#4752
      var inviteInfo = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)///By ALzahrani#4752
        .addField(///By ALzahrani#4752
          "**عدد الدعوات للسيرفر**",///By ALzahrani#4752
          `**➥** [ شخص **${Number(inviteCount)}** ]   `///By ALzahrani#4752
        )///By ALzahrani#4752
        .addField(///By ALzahrani#4752
          "**تاريخ انضمامك لسيرفرنا **",///By ALzahrani#4752
          `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `///By ALzahrani#4752
        )///By ALzahrani#4752
        .addField(///By ALzahrani#4752
          "**رابط الدعوة الذي دخلت منه**  ",///By ALzahrani#4752
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]   `///By ALzahrani#4752
        )///By ALzahrani#4752
        .setImage("")///By ALzahrani#4752
        .setColor("RANDOM")///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(Tag, Avatar);///By ALzahrani#4752
///By ALzahrani#4752
      message.channel.send(inviteInfo);///By ALzahrani#4752
    });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752



///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752




///By ALzahrani#4752



///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752





///By ALzahrani#4752


///By ALzahrani#4752



// كود حذف الرسائل
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return; ///By ALzahrani#4752
  if (message.content.startsWith(prefix + "مسح")) {///By ALzahrani#4752
    if (!message.channel.guild)///By ALzahrani#4752
      return message.reply(`** This Command For Servers Only**`);///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_GUILD"))///By ALzahrani#4752
      return message.channel.send(`** You don't have Premissions!**`);///By ALzahrani#4752
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))///By ALzahrani#4752
      return message.channel.send(`**I don't have Permission!**`);///By ALzahrani#4752
    let args = message.content.split(" ").slice(1);///By ALzahrani#4752
    let messagecount = parseInt(args);///By ALzahrani#4752
    if (args > 100)///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply(` ** يمكنك فقط مسح **100 رسالة** .**`)///By ALzahrani#4752
        .then(messages => messages.delete(1500));///By ALzahrani#4752
    if (!messagecount) args = "100";///By ALzahrani#4752
    message.channel///By ALzahrani#4752
      .fetchMessages({ limit: messagecount })///By ALzahrani#4752
      .then(messages => message.channel.bulkDelete(messages))///By ALzahrani#4752
      .then(msgs => {///By ALzahrani#4752
        message.channel///By ALzahrani#4752
          .send(`** تم حذف \`${msgs.size}\` رساله.** `)///By ALzahrani#4752
          .then(messages => messages.delete(1300));///By ALzahrani#4752
      });///By ALzahrani#4752
  }///By ALzahrani#4752
}); ///By ALzahrani#4752

///By ALzahrani#4752

// كود حذف الرسائل
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return; ///By ALzahrani#4752
  if (message.content.startsWith(prefix + "clear")) {///By ALzahrani#4752
    if (!message.channel.guild)///By ALzahrani#4752
      return message.reply(`** This Command For Servers Only**`);///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_GUILD"))///By ALzahrani#4752
      return message.channel.send(`** You don't have Premissions!**`);///By ALzahrani#4752
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))///By ALzahrani#4752
      return message.channel.send(`**I don't have Permission!**`);///By ALzahrani#4752
    let args = message.content.split(" ").slice(1);///By ALzahrani#4752
    let messagecount = parseInt(args);///By ALzahrani#4752
    if (args > 100)///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply(` ** يمكنك فقط مسح **100 رسالة** .**`)///By ALzahrani#4752
        .then(messages => messages.delete(1500));///By ALzahrani#4752
    if (!messagecount) args = "100";///By ALzahrani#4752
    message.channel///By ALzahrani#4752
      .fetchMessages({ limit: messagecount })///By ALzahrani#4752
      .then(messages => message.channel.bulkDelete(messages))///By ALzahrani#4752
      .then(msgs => {///By ALzahrani#4752
        message.channel///By ALzahrani#4752
          .send(`** تم حذف \`${msgs.size}\` رساله.** `)///By ALzahrani#4752
          .then(messages => messages.delete(1300));///By ALzahrani#4752
      });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752




///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752



///By ALzahrani#4752



// كود الميوت
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
///By ALzahrani#4752
  let command = message.content.split(" ")[0];///By ALzahrani#4752
///By ALzahrani#4752
  if (command === "=unmute") {///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_ROLES"))///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    let user = message.mentions.users.first();///By ALzahrani#4752
    let modlog = client.channels.find("name", "log")///By ALzahrani#4752;
    let muteRole = client.guilds///By ALzahrani#4752
      .get(message.guild.id)///By ALzahrani#4752
      .roles.find("name", "Muted");///By ALzahrani#4752
    if (!muteRole)///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** لا يوجد لديك رتبه الميوت 'Muted' **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    if (message.mentions.users.size < 1)///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** يجب عليك منشنت شخص اولاً**")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    const embed = new Discord.RichEmbed()///By ALzahrani#4752
      .setColor(0x00ae86)///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .addField("الأستعمال:", "اسكت/احكي")///By ALzahrani#4752
      .addField(///By ALzahrani#4752
        "تم فك الميوت عن:",///By ALzahrani#4752
        `${user.username}#${user.discriminator} (${user.id})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .addField(///By ALzahrani#4752
        "بواسطة:",///By ALzahrani#4752
        `${message.author.username}#${message.author.discriminator}`///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    if (///By ALzahrani#4752
      !message.guild///By ALzahrani#4752
        .member(client.user)///By ALzahrani#4752
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")///By ALzahrani#4752
    )///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** لا يوجد لدي برمشن Manage Roles **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
///By ALzahrani#4752
    if (message.guild.member(user).removeRole(muteRole.id)) {///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    } else {///By ALzahrani#4752
      message.guild///By ALzahrani#4752
        .member(user)///By ALzahrani#4752
        .removeRole(muteRole)///By ALzahrani#4752
        .then(() => {///By ALzahrani#4752
          return message///By ALzahrani#4752
            .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")///By ALzahrani#4752
            .catch(console.error);///By ALzahrani#4752
        });///By ALzahrani#4752
    }///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
///By ALzahrani#4752
  let command = message.content.split(" ")[0];///By ALzahrani#4752
///By ALzahrani#4752
  if (command === "=mute") {///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_ROLES"))///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    let user = message.mentions.users.first();///By ALzahrani#4752
    let modlog = client.channels.find("name", "log");///By ALzahrani#4752
    let muteRole = client.guilds///By ALzahrani#4752
      .get(message.guild.id)///By ALzahrani#4752
      .roles.find("name", "Muted");///By ALzahrani#4752
    if (!muteRole)///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** لا يوجد رتبة الميوت 'Muted' **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    if (message.mentions.users.size < 1)///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** يجب عليك منشنت شخص اولاً**")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
///By ALzahrani#4752
    const embed = new Discord.RichEmbed()///By ALzahrani#4752
      .setColor(0x00ae86)///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .addField("الأستعمال:", "اسكت/احكي")///By ALzahrani#4752
      .addField(///By ALzahrani#4752
        "تم ميوت:",///By ALzahrani#4752
        `${user.username}#${user.discriminator} (${user.id})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .addField(///By ALzahrani#4752///By ALzahrani#4752
        "بواسطة:",///By ALzahrani#4752
        `${message.author.username}#${message.author.discriminator}`///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    if (///By ALzahrani#4752
      !message.guild///By ALzahrani#4752
        .member(client.user)///By ALzahrani#4752
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")///By ALzahrani#4752
    )///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("** لا يوجد لدي برمشن Manage Roles **")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
///By ALzahrani#4752
    if (message.guild.member(user).roles.has(muteRole.id)) {///By ALzahrani#4752
      return message///By ALzahrani#4752
        .reply("**:white_check_mark: .. تم اعطاء العضو ميوت**")///By ALzahrani#4752
        .catch(console.error);///By ALzahrani#4752
    } else {///By ALzahrani#4752
      message.guild///By ALzahrani#4752
        .member(user)///By ALzahrani#4752
        .addRole(muteRole)///By ALzahrani#4752
        .then(() => {///By ALzahrani#4752
          return message///By ALzahrani#4752
            .reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**")///By ALzahrani#4752
            .catch(console.error);///By ALzahrani#4752
        });///By ALzahrani#4752
    }///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752




///By ALzahrani#4752


///By ALzahrani#4752


// كود ارسال رسالة في الخاص عند اعطاء احد رتبة
///By ALzahrani#4752
client.on('guildMemberUpdate', (oldMember, newMember,) => {///By ALzahrani#4752
if(oldMember.roles.size < newMember.roles.size) {///By ALzahrani#4752
 let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();///By ALzahrani#4752
            let hector = new Discord.RichEmbed()///By ALzahrani#4752
            .setThumbnail(oldMember.guild.iconURL)///By ALzahrani#4752
            .setColor('BLACK')///By ALzahrani#4752
            .setDescription(`✅ تم اعطائك رتبة \n**الرتبة:** \`\`${role.name}\`\n **السيرفر:** ${newMember.guild.name}`)///By ALzahrani#4752
            .setTimestamp()///By ALzahrani#4752
            newMember.user.send(hector);///By ALzahrani#4752
}   ///By ALzahrani#4752
});///By ALzahrani#4752






///By ALzahrani#4752





///By ALzahrani#4752








///By ALzahrani#4752





///كود منشن بوتات
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.content === prefix + "bots") {///By ALzahrani#4752
    var list_all = [];///By ALzahrani#4752
    message.guild.members.forEach(bb => {///By ALzahrani#4752
      if (!bb.user.bot) return;///By ALzahrani#4752
      list_all.push(`<@${bb.user.id}>`);///By ALzahrani#4752
    });///By ALzahrani#4752
    message.channel.send(list_all.join(", "));///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752


///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752




//كود بنق المستخدم 
///By ALzahrani#4752
///By ALzahrani#4752
client.on('message', async msg =>{///By ALzahrani#4752
    var prefix = '=';///By ALzahrani#4752
    if (msg.author.bot) return undefined;///By ALzahrani#4752
    if (!msg.content.startsWith(prefix)) return undefined;///By ALzahrani#4752
   ///By ALzahrani#4752
    let args = msg.content.split(' ');///By ALzahrani#4752
 ///By ALzahrani#4752
    let command = msg.content.toLowerCase().split(" ")[0];///By ALzahrani#4752
    command = command.slice(prefix.length)///By ALzahrani#4752
 ///By ALzahrani#4752
    if(command === `myping`) {///By ALzahrani#4752
    let embed = new Discord.RichEmbed()///By ALzahrani#4752
    .setColor('BLACK')///By ALzahrani#4752
    .setTitle("Your Ping :")///By ALzahrani#4752
    .setDescription(`${client.ping} ms`)///By ALzahrani#4752
    .setFooter(`${msg.author.tag}`);///By ALzahrani#4752
    msg.delete().catch(O_o=>{})///By ALzahrani#4752
    msg.channel.send(embed);///By ALzahrani#4752
    }///By ALzahrani#4752
});///By ALzahrani#4752




///By ALzahrani#4752








///By ALzahrani#4752







///By ALzahrani#4752






//كود الكيك
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.x5bz) return;///By ALzahrani#4752
  if (!message.content.startsWith(prefix)) return;///By ALzahrani#4752
///By ALzahrani#4752
  let command = message.content.split(" ")[0];///By ALzahrani#4752
  command = command.slice(prefix.length);///By ALzahrani#4752
///By ALzahrani#4752
  let args = message.content.split(" ").slice(1);///By ALzahrani#4752
///By ALzahrani#4752
  if (command == "kick") {///By ALzahrani#4752
    if (!message.channel.guild)///By ALzahrani#4752
      return message.reply("** This command only for servers**");///By ALzahrani#4752
///By ALzahrani#4752
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))///By ALzahrani#4752
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");///By ALzahrani#4752
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))///By ALzahrani#4752
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");///By ALzahrani#4752
    let user = message.mentions.users.first();///By ALzahrani#4752
    let reason = message.content///By ALzahrani#4752
      .split(" ")///By ALzahrani#4752
      .slice(2)///By ALzahrani#4752
      .join(" ");///By ALzahrani#4752
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");///By ALzahrani#4752
    if (!reason) return message.reply("**اكتب سبب الطرد**");///By ALzahrani#4752
    if (!message.guild.member(user).kickable)///By ALzahrani#4752
      return message.reply(///By ALzahrani#4752
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    message.guild.member(user).kick();///By ALzahrani#4752
///By ALzahrani#4752
    const kickembed = new Discord.RichEmbed()///By ALzahrani#4752
      .setAuthor(`KICKED!`, user.displayAvatarURL)///By ALzahrani#4752
      .setColor("RANDOM")///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")///By ALzahrani#4752
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")///By ALzahrani#4752
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");///By ALzahrani#4752
    message.channel.send({///By ALzahrani#4752
      embed: kickembed///By ALzahrani#4752
    });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752








///By ALzahrani#4752







///By ALzahrani#4752










///By ALzahrani#4752











///By ALzahrani#4752







///By ALzahrani#4752









//كود برودكاست امبد للكل
///By ALzahrani#4752



const developers = ["611183083982553098", ""];///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  var argresult = message.content///By ALzahrani#4752
    .split(` `)///By ALzahrani#4752
    .slice(1)///By ALzahrani#4752
    .join("");///By ALzahrani#4752
  if (!developers.includes(message.author.id)) return;///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", async message => {///By ALzahrani#4752
  var command = message.content.split(" ")[0];///By ALzahrani#4752
  command = command.slice(prefix.length);///By ALzahrani#4752
  if (!message.channel.guild) return;///By ALzahrani#4752
  var args = message.content///By ALzahrani#4752
    .split(" ")///By ALzahrani#4752
    .slice(1)///By ALzahrani#4752
    .join(" ");///By ALzahrani#4752
  if (command == "bc2") {///By ALzahrani#4752
    if (!message.member.hasPermission("ADMINISTRATOR")) {///By ALzahrani#4752
      return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");///By ALzahrani#4752
    }///By ALzahrani#4752
    if (!args) {///By ALzahrani#4752
      return message.reply("**عليك كتابة كلمة او جملة لإرسال البرودكاست**");///By ALzahrani#4752
    }///By ALzahrani#4752
    message.channel///By ALzahrani#4752
      .send(///By ALzahrani#4752
        `**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`///By ALzahrani#4752
      )///By ALzahrani#4752
      .then(m => {///By ALzahrani#4752
        m.react("✅").then(() => m.react("❌"));///By ALzahrani#4752
///By ALzahrani#4752
        let yesFilter = (reaction, user) =>///By ALzahrani#4752
          reaction.emoji.name == "✅" && user.id == message.author.id;///By ALzahrani#4752
        let noFiler = (reaction, user) =>///By ALzahrani#4752
          reaction.emoji.name == "❌" && user.id == message.author.id;///By ALzahrani#4752
///By ALzahrani#4752
        let yes = m.createReactionCollector(yesFilter);///By ALzahrani#4752
        let no = m.createReactionCollector(noFiler);///By ALzahrani#4752
///By ALzahrani#4752
        yes.on("collect", v => {///By ALzahrani#4752
          m.delete();///By ALzahrani#4752
          message.channel///By ALzahrani#4752
            .send(///By ALzahrani#4752
              `:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`///By ALzahrani#4752
            )///By ALzahrani#4752
            .then(msg => msg.delete(5000));///By ALzahrani#4752
          message.guild.members.forEach(member => {///By ALzahrani#4752
            let bc = new Discord.RichEmbed()///By ALzahrani#4752
              .setColor("RANDOME")///By ALzahrani#4752
              .setThumbnail(message.guild.iconURL)///By ALzahrani#4752
              .setTitle("Broadcast")///By ALzahrani#4752
              .addField("Server", message.guild.name)///By ALzahrani#4752
              .addField("Sender", message.author.username)///By ALzahrani#4752
              .addField("Message", args);///By ALzahrani#4752
///By ALzahrani#4752
            member.sendEmbed(bc);///By ALzahrani#4752
          });///By ALzahrani#4752
        });///By ALzahrani#4752
        no.on("collect", v => {///By ALzahrani#4752
          m.delete();///By ALzahrani#4752
          message.channel///By ALzahrani#4752
            .send("**Broadcast Canceled.**")///By ALzahrani#4752
            .then(msg => msg.delete(3000));///By ALzahrani#4752
        });///By ALzahrani#4752
      });///By ALzahrani#4752
  }  ///By ALzahrani#4752
});   ///By ALzahrani#4752




///By ALzahrani#4752





//كود برودكاست لرتبة معينة عادي
///By ALzahrani#4752
///By ALzahrani#4752
client.on('message' , message => {///By ALzahrani#4752
      var prefix = "=";///By ALzahrani#4752
      if(message.author.bot) return;///By ALzahrani#4752
     ///By ALzahrani#4752
      if(message.content.startsWith(prefix + "bc3")) {///By ALzahrani#4752
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;///By ALzahrani#4752
        let args = message.content.split(" ").slice(2);///By ALzahrani#4752
     var codes = args.join(' ')///By ALzahrani#4752
       ///By ALzahrani#4752
        if(!codes) {///By ALzahrani#4752
          message.channel.send("قم بكتابة الرسالة | `bc3 role message=`")///By ALzahrani#4752
            return;///By ALzahrani#4752
        }///By ALzahrani#4752
     ///By ALzahrani#4752
     ///By ALzahrani#4752
              var role = message.mentions.roles.first();///By ALzahrani#4752
                if(!role) {///By ALzahrani#4752
                  message.reply("لا توجد رتبة بهذا الاسم")///By ALzahrani#4752
                    return;///By ALzahrani#4752
                }///By ALzahrani#4752
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(m => {///By ALzahrani#4752
 m.send(`${codes}\n ${m}`);///By ALzahrani#4752
            })///By ALzahrani#4752
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)///By ALzahrani#4752
        }///By ALzahrani#4752
    });///By ALzahrani#4752


/*
/// كود الرد التلقائي

client.on('message', msg => {   if (msg.content === '') {     msg.reply('');   } });///By ALzahrani#4752






*/
client.on('message', msg => {   if (msg.content === 'test') {     msg.reply('✅');   } });///By ALzahrani#4752




client.on('message', msg => {   if (msg.content === '=help') {     msg.reply('\n **أوامــر البــوت | Bot orders** \n **---------------------------------** \n  `=1help` **الأوامــر العامــة**  \n\n  `=2help` **الأوامــر الإداريــة**  \n\n  `=3help` **أوامــر الإدارة العليــا**   \n\n  `=4help` **أوامــر القيــف اواي** \n **---------------------------------**');   } });///By ALzahrani#4752








///By ALzahrani#4752




//كود برودكاست عادي
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
///By ALzahrani#4752
            if (message.content.startsWith(prefix + "bc1")) {///By ALzahrani#4752
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;///By ALzahrani#4752
  let args = message.content.split(" ").slice(1);///By ALzahrani#4752
  var argresult = args.join(' '); ///By ALzahrani#4752
  message.guild.members.forEach(m => {///By ALzahrani#4752
 m.send(`${argresult}\n ${m}`);///By ALzahrani#4752
})///By ALzahrani#4752
 message.channel.send(`\`${message.guild.members.size}\` : عدد الاعضاء المستلمين`); ///By ALzahrani#4752
 message.delete(); ///By ALzahrani#4752
};    ///By ALzahrani#4752 
});///By ALzahrani#4752




///By ALzahrani#4752



///By ALzahrani#4752



///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752
///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752







//كود توب
///By ALzahrani#4752


const top = JSON.parse(fs.readFileSync("top.json", "UTF8"));///By ALzahrani#4752
///By ALzahrani#4752
function save() {///By ALzahrani#4752
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));///By ALzahrani#4752
}///By ALzahrani#4752
client.on("voiceStateUpdate", async function(oldMember, newMember) {///By ALzahrani#4752
    if (newMember.user.bot) return;///By ALzahrani#4752
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};///By ALzahrani#4752
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {///By ALzahrani#4752
        "text": 0,///By ALzahrani#4752
        "voice": parseInt(Math.random()*10),///By ALzahrani#4752
        "msgs": 0,///By ALzahrani#4752
        "id": newMember.user.id///By ALzahrani#4752
    }///By ALzahrani#4752
    save();///By ALzahrani#4752
    if (!oldMember.voiceChannel && newMember.voiceChannel) {///By ALzahrani#4752
        var addXP = setInterval(async function () {///By ALzahrani#4752
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);///By ALzahrani#4752
            save();///By ALzahrani#4752
            if (!newMember.voiceChannel) {///By ALzahrani#4752
                clearInterval(addXP);///By ALzahrani#4752
            }///By ALzahrani#4752
        }, 60000);///By ALzahrani#4752
    }///By ALzahrani#4752
});///By ALzahrani#4752
client.on("message", async function (message) {///By ALzahrani#4752
    if (message.author.bot) return;///By ALzahrani#4752
    if (!message.guild) return;///By ALzahrani#4752
    if (!top[message.guild.id]) top[message.guild.id] = {};///By ALzahrani#4752
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {///By ALzahrani#4752
        "text": parseInt(Math.random()*10),///By ALzahrani#4752
        "voice": 1,///By ALzahrani#4752
        "msgs": 0,///By ALzahrani#4752
        "id": message.author.id///By ALzahrani#4752
    }///By ALzahrani#4752
    if (top[message.guild.id][message.author.id].msgs > 10) {///By ALzahrani#4752
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);///By ALzahrani#4752
        top[message.guild.id][message.author.id].msgs = 0;///By ALzahrani#4752
    }///By ALzahrani#4752
    save();///By ALzahrani#4752
    var args = message.content.split(" ");///By ALzahrani#4752
    var cmd = args[0].toLowerCase();///By ALzahrani#4752
    if (!message.content.startsWith(prefix)) return;///By ALzahrani#4752
  if(message.content.startsWith(prefix + "top text")) {///By ALzahrani#4752
            var topArray = Object.values(top[message.guild.id]);///By ALzahrani#4752
            var num = 0;///By ALzahrani#4752
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {///By ALzahrani#4752
                if (user.text > 0) {///By ALzahrani#4752
                    return `**#${++num} | <@${user.id}> XP: ${user.text} **`///By ALzahrani#4752
                }///By ALzahrani#4752
            }).join("n")}`;///By ALzahrani#4752
            var embed = new Discord.RichEmbed()///By ALzahrani#4752
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)///By ALzahrani#4752
  .setColor("13B813")///By ALzahrani#4752
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}    **✨ | For More: ${prefix}top text**`, true) ///By ALzahrani#4752 
        .setFooter(message.author.tag, message.author.displayAvatarURL)///By ALzahrani#4752
            .setTimestamp()///By ALzahrani#4752
            message.channel.send({///By ALzahrani#4752
                embed: embed///By ALzahrani#4752
            });///By ALzahrani#4752
  } else {///By ALzahrani#4752
    if(message.content.startsWith(prefix + "top voice")) {///By ALzahrani#4752
            var topArray = Object.values(top[message.guild.id]);///By ALzahrani#4752
            var num = 0;///By ALzahrani#4752
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {///By ALzahrani#4752
                if (user.voice > 0) {///By ALzahrani#4752
                    return `**#${++num} | <@${user.id}> XP: ${user.voice}**`///By ALzahrani#4752
                }///By ALzahrani#4752
            }).join("n")}`;///By ALzahrani#4752
            var embed = new Discord.RichEmbed()///By ALzahrani#4752
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)///By ALzahrani#4752
  .setColor("13B813")///By ALzahrani#4752
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}    **:sparkles: More?** ${prefix}top voice`, true)///By ALzahrani#4752
  ///By ALzahrani#4752
        .setFooter(message.author.tag, message.author.displayAvatarURL)///By ALzahrani#4752
            .setTimestamp()  ///By ALzahrani#4752
            message.channel.send({///By ALzahrani#4752
                embed: embed///By ALzahrani#4752
            });///By ALzahrani#4752
  } else {///By ALzahrani#4752
       if(message.content.startsWith(prefix + "top")) {///By ALzahrani#4752
            var topArray = Object.values(top[message.guild.id]);///By ALzahrani#4752
            var num = 0;///By ALzahrani#4752
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {///By ALzahrani#4752
                if (user.text > 0) {///By ALzahrani#4752
                    return `**#${++num} | <@${user.id}> XP: ${user.text} **`///By ALzahrani#4752
                }///By ALzahrani#4752
            }).join("n")}`;///By ALzahrani#4752
            num = 0;///By ALzahrani#4752
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {///By ALzahrani#4752
                if (user.voice > 0) {///By ALzahrani#4752
                    return `**#${++num} | <@${user.id}> XP: ${user.voice} **`///By ALzahrani#4752
                }///By ALzahrani#4752
            }).join("n")}`;///By ALzahrani#4752
            var embed = new Discord.RichEmbed()  ///By ALzahrani#4752
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)///By ALzahrani#4752
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}    **:sparkles: More?** ${prefix}top text`, true)///By ALzahrani#4752
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr}  **:sparkles: More?** ${prefix}top voice`, true)///By ALzahrani#4752
            .setFooter(message.author.tag, message.author.displayAvatarURL)///By ALzahrani#4752
            .setTimestamp()///By ALzahrani#4752
            .setColor("13B813");///By ALzahrani#4752
            message.channel.send({///By ALzahrani#4752
                embed: embed///By ALzahrani#4752
            ///By ALzahrani#4752
  ///By ALzahrani#4752
            });///By ALzahrani#4752
        }///By ALzahrani#4752
  }///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752

///By ALzahrani#4752



///By ALzahrani#4752

///By ALzahrani#4752



///By ALzahrani#4752



///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752



///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752




///By ALzahrani#4752





///By ALzahrani#4752



//كود ارسال رسالة في روم بأمبد
///By ALzahrani#4752
client.on('message',async message => { ///By ALzahrani#4752
    var room;///By ALzahrani#4752
    var chat; ///By ALzahrani#4752
    var duration;///By ALzahrani#4752
    var gMembers;///By ALzahrani#4752
    var filter = m => m.author.id === message.author.id;///By ALzahrani#4752
    if(message.content.startsWith("=erm")) { ///By ALzahrani#4752
        if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');///By ALzahrani#4752
        message.channel.send(`:eight_pointed_black_star:| **اكتب اسم الروم الذي تريد به ارسال الرسالة**`).then(msgg => { ///By ALzahrani#4752
            message.channel.awaitMessages(filter, {///By ALzahrani#4752
                max: 1,///By ALzahrani#4752
                time: 20000,///By ALzahrani#4752
                errors: ['time']///By ALzahrani#4752
            }).then(collected => { ///By ALzahrani#4752
                let room = message.guild.channels.find('name', collected.first().content);///By ALzahrani#4752
                if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**'); ///By ALzahrani#4752
                room = collected.first().content;///By ALzahrani#4752
                collected.first().delete();///By ALzahrani#4752
                        msgg.edit(':eight_pointed_black_star:| ** اكتب الرساله الي تبيها **').then(msg => { ///By ALzahrani#4752
                            message.channel.awaitMessages(filter, { ///By ALzahrani#4752
                                max: 1,///By ALzahrani#4752
                                time: 20000,///By ALzahrani#4752
                                errors: ['time'] ///By ALzahrani#4752
                            }).then(collected => {///By ALzahrani#4752
                                chat = collected.first().content;///By ALzahrani#4752
                                collected.first().delete();///By ALzahrani#4752
                                try {///By ALzahrani#4752
                                    let Embed = new Discord.RichEmbed()///By ALzahrani#4752
                                        .setAuthor(message.guild.name)///By ALzahrani#4752
                                        .setDescription(chat)///By ALzahrani#4752
                                        .setThumbnail(message.guild.iconURL)///By ALzahrani#4752
                                        .setFooter(message.author.username, message.author.avatarURL);///By ALzahrani#4752
                                    message.guild.channels.find('name', room).send(Embed).then(m => {///By ALzahrani#4752
                                        let re = m.react('🎉');///By ALzahrani#4752
                                        setTimeout(() => { ///By ALzahrani#4752
                                            let users = m.reactions.get("🎉").users;///By ALzahrani#4752
                                            let list = users.array().filter(u => u.id !== m.author.id);///By ALzahrani#4752
                                            let gFilter = list[Math.floor(Math.random() * list.length) + 0];///By ALzahrani#4752
                                            if(users.size === 1) gFilter = '**لم يتم التحديد**';///By ALzahrani#4752
                                            let Embed = new Discord.RichEmbed()///By ALzahrani#4752
                                                .setAuthor(message.author.username, message.author.avatarURL)///By ALzahrani#4752
                                                .setTitle(chat)///By ALzahrani#4752
                                                .addField(`ping`+`[${Date.now() - message.createdTimestamp}]`)///By ALzahrani#4752
                                                .setFooter(message.guild.name, message.guild.iconURL);///By ALzahrani#4752
                                            m.edit(Embed);///By ALzahrani#4752
                                        },duration); ///By ALzahrani#4752
                                    });///By ALzahrani#4752
                                    msgg.edit(`:heavy_check_mark:| تم ارسال الرساله في الروم`); ///By ALzahrani#4752
                                } catch(e) {///By ALzahrani#4752
                                    msgg.edit(`:heavy_multiplication_x:| **لم اقدر على ارسال الرسالة**`); ///By ALzahrani#4752
                                    console.log(e);///By ALzahrani#4752
                                }///By ALzahrani#4752
                            });///By ALzahrani#4752
                        });///By ALzahrani#4752
                    });///By ALzahrani#4752
                });///By ALzahrani#4752
  }///By ALzahrani#4752
///By ALzahrani#4752
});///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752



///By ALzahrani#4752



///By ALzahrani#4752


///By ALzahrani#4752


//كود عدد البوتات في روم صوتي
///By ALzahrani#4752
///By ALzahrani#4752
client.on('message',async message => {///By ALzahrani#4752
  var prefix = "-";///By ALzahrani#4752
    if(message.content.startsWith(prefix + "setbots")) {///By ALzahrani#4752
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **لا تمتلك صلاحيه**');///By ALzahrani#4752
    message.channel.send('✅| **تم انشاء الروم بنجاح**');///By ALzahrani#4752
    message.guild.createChannel(`Online : [ ${message.guild.members.filter(m => m.user.bot).size} `  , 'voice').then(c => {///By ALzahrani#4752
      console.log(`Done make room in: \n ${message.guild.name}`);///By ALzahrani#4752
      c.overwritePermissions(message.guild.id, {///By ALzahrani#4752
        CONNECT: false,///By ALzahrani#4752
        SPEAK: false///By ALzahrani#4752
      });///By ALzahrani#4752
      setInterval(() => {///By ALzahrani#4752
        c.setName(`Bots:  ${message.guild.members.filter(m => m.user.bot).size} `) ///By ALzahrani#4752
      },1000);///By ALzahrani#4752
    });///By ALzahrani#4752
    }///By ALzahrani#4752
  });///By ALzahrani#4752




///By ALzahrani#4752




//كود يوزر
///By ALzahrani#4752
client.on('message' , message => {///By ALzahrani#4752
if(message.content.startsWith(prefix + "user")) {///By ALzahrani#4752
    let user = message.mentions.users.first() || message.author;///By ALzahrani#4752
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();///By ALzahrani#4752
    let game;///By ALzahrani#4752
    if (user.presence.game === null) {///By ALzahrani#4752
        game = 'No Playing.';///By ALzahrani#4752
    } else {///By ALzahrani#4752
        game = user.presence.game.name;///By ALzahrani#4752
    }///By ALzahrani#4752
    let messag;///By ALzahrani#4752
    if (user.lastMessage === null) {///By ALzahrani#4752
        messag = 'xdddddd';///By ALzahrani#4752
    } else {///By ALzahrani#4752
        messag = user.lastMessage;///By ALzahrani#4752
    }///By ALzahrani#4752
    let status;///By ALzahrani#4752
    if (user.presence.status === 'online') {///By ALzahrani#4752
        status = '<a:x19:712913361590943780>';///By ALzahrani#4752
    } else if (user.presence.status === 'dnd') {///By ALzahrani#4752
        status = '<a:x15:712913362027282483>';///By ALzahrani#4752
    } else if (user.presence.status === 'idle') {///By ALzahrani#4752
        status = '<a:x20:712913361418846229>';///By ALzahrani#4752
    } else if (user.presence.status === 'offline') {///By ALzahrani#4752
        status = '<a:x18:712913361595007017>';///By ALzahrani#4752
    }///By ALzahrani#4752
   ///By ALzahrani#4752
    const embed = new Discord.RichEmbed()///By ALzahrani#4752
	.addField('** | الأسم: **', `» ${user.username}#${user.discriminator}` ,true)///By ALzahrani#4752
	.addField('** | ايدي: **', `» ${user.id}` ,true)///By ALzahrani#4752
  .addField('** | بلاينق: **', `» ${game}` ,true)///By ALzahrani#4752
	.addField('** | وقت دخول الديسكورد: **', `» ${joineddiscord}` ,true)///By ALzahrani#4752
	.addField('** | بوت: **', `» ${user.bot}` ,true)///By ALzahrani#4752
  .setFooter(`Copy Right©️ Reserved For: ${client.user.username}Bot™`)///By ALzahrani#4752
	     .setThumbnail(user.displayAvatarURL)///By ALzahrani#4752
	     .setAuthor(`معلومات المستخدم: ${user.username}`, user.displayAvatarURL)///By ALzahrani#4752
	     .setColor('#7289d9');///By ALzahrani#4752
  message.channel.send({embed})///By ALzahrani#4752
}///By ALzahrani#4752
 });///By ALzahrani#4752



///By ALzahrani#4752

///By ALzahrani#4752


///By ALzahrani#4752




///By ALzahrani#4752




///By ALzahrani#4752



///By ALzahrani#4752

///By ALzahrani#4752

///By ALzahrani#4752



///By ALzahrani#4752

///By ALzahrani#4752



///By ALzahrani#4752



///By ALzahrani#4752




///By ALzahrani#4752




///By ALzahrani#4752





///By ALzahrani#4752











///By ALzahrani#4752








//كود هيلب
///By ALzahrani#4752///By ALzahrani#4752
///By ALzahrani#4752///By ALzahrani#4752
///By ALzahrani#4752///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
  if (message.content === prefix + "1help") {///By ALzahrani#4752
    message.channel.send(///By ALzahrani#4752
      `**:white_check_mark:  | تم ارسال الاوامر العامة على الخاص **`///By ALzahrani#4752
    );

    message.author.sendMessage(///By ALzahrani#4752
` 

   
**__الاوامر العامــه__** ✽
  **\`${prefix}avatar\` : لعرض صورتك أو صورة الي تمنشنه** 
  **\`${prefix}inf\` : معلومات عن دخولك السيرفر**
  **\`${prefix}myroles\` : يعرضلك الرولات الي معك**
  **\`${prefix}server\` : معلومات السيرفر**
  **\`${prefix}since\` : يعرضلك كم لك من يوم دخلت السيرفر**
  **\`${prefix}top\` : لمعرفة مركزك **
  **\`${prefix}top text\` : لمعرفة مركزك من ناحية الكتابة**
  **\`${prefix}top voice\` : لمعرفة مركزك من ناحيت اكثرة وجودك في الرومات الصوتية**
  **\`${prefix}user\` : معلومات عن نفسك** 
  **\`${prefix}bot\` : لعرض معلومات عن البوت** 
  **\`${prefix}ping\` : لعرض بنق البوت** 
  **\`${prefix}myping\` : لعرض بنقك ** 
  **\`${prefix}avatar server\` : لعرض صورت السيرفر** 


**__ردود تلقائية__** ✽ 
**\`(رابط)\` : يرسلك البوت رابط السيرفر** 

**__ALzahrani#4752__**

`);///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
  if (message.content === prefix + "2help") {///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_MESSAGES"))///By ALzahrani#4752
return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);///By ALzahrani#4752

message.channel.send(///By ALzahrani#4752
      `**:white_check_mark:  | تم ارسال الاوامر الإداريــه على الخاص **`///By ALzahrani#4752
    );

    message.author.sendMessage(///By ALzahrani#4752
` 


**__الاوامر الإداريــه__** ✽ 
**\`(مسح او clear)\` : لمسح الشات** 
**\`${prefix}ban\` : لتبنيد شخص** 
**\`${prefix}kick\` : لاعطاء كيك لشخص** 
**\`${prefix}mute\` : لاعطاء ميوت لشخص** 
**\`${prefix}unmute\` : لفك ميوت عن شخص** 
**\`${prefix}move\` : لسحب الشخص الى روومك**
**\`${prefix}bots\` : لإظهار جميع بوتات السيرفر**

**__ALzahrani#4752__**

`);///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
  if (message.content === prefix + "3help") {///By ALzahrani#4752
    if (!message.member.hasPermission("ADMINISTRATOR"))     ///By ALzahrani#4752
return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);///By ALzahrani#4752
    message.channel.send(///By ALzahrani#4752
      `**:white_check_mark:  | تم ارسال اوامر الإدارة العليا على الخاص **`///By ALzahrani#4752
    );///By ALzahrani#4752
///By ALzahrani#4752
    message.author.sendMessage(`


**__أوامر الإدارة العليا__** ✽
  **\`${prefix}bc1\` : لارسال برودكاست بدون امبد** 
  **\`${prefix}bc2\` : لارسال برودكاست مع امبد** 
  **\`${prefix}bc3\` : لارسال برودكاست لرتبة معينة بدون امبد** 
  **\`${prefix}setLog\` :  تحديد روم اللوق**
  **\`${prefix}l\` :  لقفل الشات**
  **\`${prefix}ul\` :  لفتح الشات**
  **\`${prefix}erm\` :  لإرسال رسالة محددة في روم محدد**

**__ALzahrani#4752__**

`);///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
  if (message.content === prefix + "4help") {///By ALzahrani#4752
    if (!message.member.hasPermission("ADMINISTRATOR"))    ///By ALzahrani#4752 
return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);///By ALzahrani#4752
    message.channel.send(///By ALzahrani#4752
      `**:white_check_mark:  | تم ارسال اوامر القيف اواي على الخاص **`///By ALzahrani#4752
    );///By ALzahrani#4752
///By ALzahrani#4752
    message.author.sendMessage(`


**__أوامر القيف اواي__** ✽
  **\`${prefix}rollg\` : لإختيارفائز اخر** 
  **\`${prefix}endg\` : لإيقاف القيف اواي** 
  **\`${prefix}startg\` : لبدأ القيف اواي** 

**__ALzahrani#4752__**

`);///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752
///By ALzahrani#4752



///By ALzahrani#4752



//كود بنق البوت
///By ALzahrani#4752
client.on('message', message =>{///By ALzahrani#4752
  if(message.content === prefix + 'ping'){///By ALzahrani#4752
let start = Date.now(); message.channel.send('pong').then(message => { ///By ALzahrani#4752
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);///By ALzahrani#4752
  });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752




///By ALzahrani#4752








//كود كتابة نقاط في خاص البوت

///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.channel.type === "dm") {  ///By ALzahrani#4752
///By ALzahrani#4752
      message.channel.startTyping();  ///By ALzahrani#4752
      setTimeout(() => {  ///By ALzahrani#4752
        message.channel.stopTyping();  ///By ALzahrani#4752
      }, Math.random() * (1 - 3) + 1 * 1000);///By ALzahrani#4752
   ///By ALzahrani#4752
  }  ///By ALzahrani#4752
});///By ALzahrani#4752









///By ALzahrani#4752



























///By ALzahrani#4752





































///By ALzahrani#4752

//كود التقديم
//off
/*
client.on("message", message => { // تقديم الإدارة
  if(message.content.startsWith("تقديم على الإدارة")) {///By ALzahrani#4752
        if(!message.channel.guild) return;///By ALzahrani#4752
                if(message.author.bot) return;///By ALzahrani#4752
        let channel = message.guild.channels.find("name", "اسم روم النتائج")///By ALzahrani#4752
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")///By ALzahrani#4752
            if(channel) {///By ALzahrani#4752
            message.channel.send( message.member + '`1`').then( (m) =>{///By ALzahrani#4752
              m.edit( message.member + '  ' )///By ALzahrani#4752
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {///By ALzahrani#4752
                  m1 = m1.first();///By ALzahrani#4752
                  var name = m1.content;///By ALzahrani#4752
                  m1.delete();///By ALzahrani#4752
                  m.edit(message.member + '`2`').then( (m) =>{///By ALzahrani#4752
                      m.edit( message.member + ', ' )///By ALzahrani#4752
                      setTimeout(() => {///By ALzahrani#4752
                        m.delete()///By ALzahrani#4752
                      }, 2500);///By ALzahrani#4752
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {///By ALzahrani#4752
                          m2 = m2.first();///By ALzahrani#4752
                          var age = m2.content;///By ALzahrani#4752
                          m2.delete()///By ALzahrani#4752
                          message.channel.send( message.member + '`3`').then( (m) =>{///By ALzahrani#4752
                            m.edit( message.member + ' ' )///By ALzahrani#4752
                            setTimeout(() => {///By ALzahrani#4752
                              m.delete()///By ALzahrani#4752
                            }, 2500);///By ALzahrani#4752
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {///By ALzahrani#4752
                                m3 = m3.first();///By ALzahrani#4752
                                var ask = m3.content;///By ALzahrani#4752
                                m3.delete();///By ALzahrani#4752
                                message.channel.send( message.member + '`4`').then( (m) =>{///By ALzahrani#4752
                                  m.edit( message.member + ',   ' )///By ALzahrani#4752
                                  setTimeout(() => {///By ALzahrani#4752
                                    m.delete()///By ALzahrani#4752
                                  }, 2500);///By ALzahrani#4752
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {///By ALzahrani#4752
                                      m4 = m4.first();///By ALzahrani#4752
                                      var ask2 = m4.content;///By ALzahrani#4752
                                      m4.delete();///By ALzahrani#4752
                                      message.channel.send( message.member + '``5``').then( (m) =>{///By ALzahrani#4752
                                        m.edit( message.member + ', ' )///By ALzahrani#4752
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {///By ALzahrani#4752
                                            m5 = m5.first();///By ALzahrani#4752
                                            var ask3 = m5.content;///By ALzahrani#4752
                                            m5.delete();///By ALzahrani#4752
                      m.edit(message.member + ', لقد تم ارسال تقديمك بنجاح').then( (mtime)=>{///By ALzahrani#4752
                        setTimeout(() => {///By ALzahrani#4752
                          let embed = new Discord.RichEmbed()///By ALzahrani#4752
                          .setAuthor(message.author.username, message.author.avatarURL) ///By ALzahrani#4752
                          .setColor('#c3cdff')///By ALzahrani#4752
                        .setTitle(`\`التقديم على الإدارة\` \n سوف يتم الرد عليك قريبا من الادارة العليا , \n > ID: ${message.author.id}`)///By ALzahrani#4752
                        .addField('> \`\`', ` ** ${name} ** ` , true)///By ALzahrani#4752
                        .addField('> \`\`', ` ** ${age} ** ` , true)///By ALzahrani#4752
                        .addField('> \`\`',`** ${ask} ** ` , true)///By ALzahrani#4752
                        .addField('> \`\` ',` ** ${ask2} ** ` , true)///By ALzahrani#4752
                        .addField('> \`ا\`',` ** ${ask3} ** ` , true)///By ALzahrani#4752
                        .addField('> تاريخ الطلب',` \`${message.author.createdAt} \` ` , true)///By ALzahrani#4752
                        channel.send(embed)///By ALzahrani#4752
                        }, 2500);///By ALzahrani#4752
                        setTimeout(() => {///By ALzahrani#4752
                          mtime.delete()///By ALzahrani#4752
                        }, 3000);///By ALzahrani#4752
///By ALzahrani#4752
                  })///By ALzahrani#4752
                })///By ALzahrani#4752
                })///By ALzahrani#4752
              })///By ALzahrani#4752
            })///By ALzahrani#4752
          })///By ALzahrani#4752
        })///By ALzahrani#4752
        })///By ALzahrani#4752
              })///By ALzahrani#4752
          })///By ALzahrani#4752
        })///By ALzahrani#4752
    }///By ALzahrani#4752
}///By ALzahrani#4752
        });///By ALzahrani#4752
        client.on('message',async message => {///By ALzahrani#4752
          let mention = message.mentions.members.first();///By ALzahrani#4752
          if(message.content.startsWith("مقبول")) {///By ALzahrani#4752
          if(!message.channel.guild) return;///By ALzahrani#4752
          let acRoom = message.guild.channels.find('name', 'اسم روم القبول');///By ALzahrani#4752
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;///By ALzahrani#4752
          if(!mention) return message.reply("Please Mention");///By ALzahrani#4752
         ///By ALzahrani#4752
          acRoom.send(`> اهلا بك تم قبول طلبك لفك الباند اتمنى عدم التخريب مرة أخرى \n ${mention} تم فك الباند - :no_entry:  `)///By ALzahrani#4752
          }///By ALzahrani#4752
        });///By ALzahrani#4752
///By ALzahrani#4752
client.on('message',async message => {///By ALzahrani#4752
  let mention = message.mentions.members.first();///By ALzahrani#4752
  if(message.content.startsWith("مرفوض")) {///By ALzahrani#4752
  if(!message.channel.guild) return;///By ALzahrani#4752
  let acRoom = message.guild.channels.find('name', 'اسم روم القبول');///By ALzahrani#4752
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;///By ALzahrani#4752
  if(!mention) return message.reply("Please Mention");///By ALzahrani#4752
 ///By ALzahrani#4752
  acRoom.send(`> نعتذر منك تم رفضك محاولة اخرى في وقت لاحق \n ${mention} - :no_entry:  `)///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
*////By ALzahrani#4752


















///By ALzahrani#4752













//كود اللوق
///By ALzahrani#4752
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (!message.channel.guild) return;///By ALzahrani#4752
  let room = message.content.split(" ").slice(1);///By ALzahrani#4752
  let findroom = message.guild.channels.find(r => r.name == room);///By ALzahrani#4752
  if (message.content.startsWith(prefix + "setLog")) {///By ALzahrani#4752
    if (!message.channel.guild)///By ALzahrani#4752
      return message.reply("**This Command Only For Servers**");///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_GUILD"))///By ALzahrani#4752
      return message.channel.send(///By ALzahrani#4752
        "**ليس لديك برمشن** `MANAGE_GUILD`"///By ALzahrani#4752
      );///By ALzahrani#4752
    if (!room) return message.channel.send("Please Type The Channel Name");///By ALzahrani#4752
    if (!findroom)///By ALzahrani#4752
      return message.channel.send("Please Type The Log Channel Name");///By ALzahrani#4752
    let embed = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**تم وضع اللوق**")///By ALzahrani#4752
      .addField("الروم:", `${room}`)///By ALzahrani#4752
      .addField("من قبل:", `${message.author}`)///By ALzahrani#4752
      .setThumbnail(message.author.avatarURL)///By ALzahrani#4752
      .setFooter(`${client.user.username}`);///By ALzahrani#4752
    message.channel.sendEmbed(embed);///By ALzahrani#4752
    log[message.guild.id] = {///By ALzahrani#4752
      channel: room,///By ALzahrani#4752
      onoff: "On"///By ALzahrani#4752
    };///By ALzahrani#4752
    fs.writeFile("./log.json", JSON.stringify(log), err => {///By ALzahrani#4752
      if (err) console.error(err);///By ALzahrani#4752
    });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (message.content.startsWith(prefix + "toggleLog")) {///By ALzahrani#4752
    if (!message.channel.guild)///By ALzahrani#4752
      return message.reply("**This Command Only For Servers**");///By ALzahrani#4752
    if (!message.member.hasPermission("MANAGE_GUILD"))///By ALzahrani#4752
      return message.channel.send(///By ALzahrani#4752
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"///By ALzahrani#4752
      );///By ALzahrani#4752
    if (!log[message.guild.id])///By ALzahrani#4752
      log[message.guild.id] = {///By ALzahrani#4752
        onoff: "Off"///By ALzahrani#4752
      };///By ALzahrani#4752
    if (log[message.guild.id].onoff === "Off")///By ALzahrani#4752
      return [///By ALzahrani#4752
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),///By ALzahrani#4752
        (log[message.guild.id].onoff = "On")///By ALzahrani#4752
      ];///By ALzahrani#4752
    if (log[message.guild.id].onoff === "On")///By ALzahrani#4752
      return [///By ALzahrani#4752
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),///By ALzahrani#4752
        (log[message.guild.id].onoff = "Off")///By ALzahrani#4752
      ];///By ALzahrani#4752
    fs.writeFile("./log.json", JSON.stringify(log), err => {///By ALzahrani#4752
      if (err)///By ALzahrani#4752
        console.error(err).catch(err => {///By ALzahrani#4752
          console.error(err);///By ALzahrani#4752
        });///By ALzahrani#4752
    });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("messageDelete", message => {///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
  if (message.channel.type === "dm") return;///By ALzahrani#4752
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!log[message.guild.id])///By ALzahrani#4752
    log[message.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[message.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = message.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[message.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  let messageDelete = new Discord.RichEmbed()///By ALzahrani#4752
    .setTitle("**[MESSAGE DELETE]**")///By ALzahrani#4752
    .setColor("RED")///By ALzahrani#4752
    .setThumbnail(message.author.avatarURL)///By ALzahrani#4752
    .setDescription(///By ALzahrani#4752
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``///By ALzahrani#4752
    )///By ALzahrani#4752
    .setTimestamp()///By ALzahrani#4752
    .setFooter(message.guild.name, message.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
  logChannel.send(messageDelete);///By ALzahrani#4752
});///By ALzahrani#4752
client.on("messageUpdate", (oldMessage, newMessage) => {///By ALzahrani#4752
  if (oldMessage.author.bot) return;///By ALzahrani#4752
  if (!oldMessage.channel.type === "dm") return;///By ALzahrani#4752
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!log[oldMessage.guild.id])///By ALzahrani#4752
    log[oldMessage.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[oldMessage.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = oldMessage.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[oldMessage.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  if (oldMessage.content.startsWith("https://")) return;///By ALzahrani#4752
///By ALzahrani#4752
  let messageUpdate = new Discord.RichEmbed()///By ALzahrani#4752
    .setTitle("**[MESSAGE EDIT]**")///By ALzahrani#4752
    .setThumbnail(oldMessage.author.avatarURL)///By ALzahrani#4752
    .setColor("BLUE")///By ALzahrani#4752
    .setDescription(///By ALzahrani#4752
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )///By ALzahrani#4752
    .setTimestamp()///By ALzahrani#4752
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
  logChannel.send(messageUpdate);///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("roleCreate", role => {///By ALzahrani#4752
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;///By ALzahrani#4752
  if (!log[role.guild.id])///By ALzahrani#4752
    log[role.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[role.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = role.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[role.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  role.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    let roleCreate = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[ROLE CREATE]**")///By ALzahrani#4752
      .setThumbnail(userAvatar)///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setColor("GREEN")///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(role.guild.name, role.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(roleCreate);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
client.on("roleDelete", role => {///By ALzahrani#4752
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;///By ALzahrani#4752
  if (!log[role.guild.id])///By ALzahrani#4752
    log[role.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[role.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = role.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[role.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  role.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    let roleDelete = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[ROLE DELETE]**")///By ALzahrani#4752
      .setThumbnail(userAvatar)///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setColor("RED")///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(role.guild.name, role.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(roleDelete);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
client.on("roleUpdate", (oldRole, newRole) => {///By ALzahrani#4752
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!log[oldRole.guild.id])///By ALzahrani#4752
    log[oldRole.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[oldRole.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = oldRole.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[oldRole.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  oldRole.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    if (oldRole.name !== newRole.name) {///By ALzahrani#4752
      if (log[oldRole.guild.id].onoff === "Off") return;///By ALzahrani#4752
      let roleUpdateName = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[ROLE NAME UPDATE]**")///By ALzahrani#4752
        .setThumbnail(userAvatar)///By ALzahrani#4752
        .setColor("BLUE")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(roleUpdateName);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (oldRole.hexColor !== newRole.hexColor) {///By ALzahrani#4752
      if (oldRole.hexColor === "#000000") {///By ALzahrani#4752
        var oldColor = "`Default`";///By ALzahrani#4752
      } else {///By ALzahrani#4752
        var oldColor = oldRole.hexColor;///By ALzahrani#4752
      }///By ALzahrani#4752
      if (newRole.hexColor === "#000000") {///By ALzahrani#4752
        var newColor = "`Default`";///By ALzahrani#4752
      } else {///By ALzahrani#4752
        var newColor = newRole.hexColor;///By ALzahrani#4752
      }///By ALzahrani#4752
      if (log[oldRole.guild.id].onoff === "Off") return;///By ALzahrani#4752
      let roleUpdateColor = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[ROLE COLOR UPDATE]**")///By ALzahrani#4752
        .setThumbnail(userAvatar)///By ALzahrani#4752
        .setColor("BLUE")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(roleUpdateColor);///By ALzahrani#4752
    }///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("channelCreate", channel => {///By ALzahrani#4752
  if (!channel.guild) return;///By ALzahrani#4752
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!log[channel.guild.id])///By ALzahrani#4752
    log[channel.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[channel.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = channel.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[channel.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  if (channel.type === "text") {///By ALzahrani#4752
    var roomType = "Text";///By ALzahrani#4752
  } else if (channel.type === "voice") {///By ALzahrani#4752
    var roomType = "Voice";///By ALzahrani#4752
  } else if (channel.type === "category") {///By ALzahrani#4752
    var roomType = "Category";///By ALzahrani#4752
  }///By ALzahrani#4752
///By ALzahrani#4752
  channel.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    let channelCreate = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[CHANNEL CREATE]**")///By ALzahrani#4752
      .setThumbnail(userAvatar)///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setColor("GREEN")///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(channel.guild.name, channel.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(channelCreate);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
client.on("channelDelete", channel => {///By ALzahrani#4752
  if (!channel.guild) return;///By ALzahrani#4752
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!log[channel.guild.id])///By ALzahrani#4752
    log[channel.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[channel.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = channel.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[channel.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  if (channel.type === "text") {///By ALzahrani#4752
    var roomType = "Text";///By ALzahrani#4752
  } else if (channel.type === "voice") {///By ALzahrani#4752
    var roomType = "Voice";///By ALzahrani#4752
  } else if (channel.type === "category") {///By ALzahrani#4752
    var roomType = "Category";///By ALzahrani#4752
  }///By ALzahrani#4752
///By ALzahrani#4752
  channel.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    let channelDelete = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[CHANNEL DELETE]**")///By ALzahrani#4752
      .setThumbnail(userAvatar)///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setColor("RED")///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(channel.guild.name, channel.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(channelDelete);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
client.on("channelUpdate", (oldChannel, newChannel) => {///By ALzahrani#4752
  if (!oldChannel.guild) return;///By ALzahrani#4752
  if (!log[oldChannel.guild.id])///By ALzahrani#4752
    log[oldChannel.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[oldChannel.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = oldChannel.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[oldChannel.guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  if (oldChannel.type === "text") {///By ALzahrani#4752
    var channelType = "Text";///By ALzahrani#4752
  } else if (oldChannel.type === "voice") {///By ALzahrani#4752
    var channelType = "Voice";///By ALzahrani#4752
  } else if (oldChannel.type === "category") {///By ALzahrani#4752
    var channelType = "Category";///By ALzahrani#4752
  }///By ALzahrani#4752
///By ALzahrani#4752
  oldChannel.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    if (oldChannel.name !== newChannel.name) {///By ALzahrani#4752
      let newName = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[CHANNEL EDIT]**")///By ALzahrani#4752
        .setThumbnail(userAvatar)///By ALzahrani#4752
        .setColor("BLUE")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(newName);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (oldChannel.topic !== newChannel.topic) {///By ALzahrani#4752
      if (log[oldChannel.guild.id].onoff === "Off") return;///By ALzahrani#4752
      let newTopic = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[CHANNEL EDIT]**")///By ALzahrani#4752
        .setThumbnail(userAvatar)///By ALzahrani#4752
        .setColor("BLUE")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||///By ALzahrani#4752
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||///By ALzahrani#4752
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${///By ALzahrani#4752
            oldChannel.id///By ALzahrani#4752
          })\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(newTopic);///By ALzahrani#4752
    }///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("guildBanAdd", (guild, user) => {///By ALzahrani#4752
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;///By ALzahrani#4752
  if (!log[guild.id])///By ALzahrani#4752
    log[guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    if (userID === client.user.id) return;///By ALzahrani#4752
///By ALzahrani#4752
    let banInfo = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[BANNED]**")///By ALzahrani#4752
      .setThumbnail(userAvatar)///By ALzahrani#4752
      .setColor("DARK_RED")///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(guild.name, guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(banInfo);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
client.on("guildBanRemove", (guild, user) => {///By ALzahrani#4752
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;///By ALzahrani#4752
  if (!log[guild.id])///By ALzahrani#4752
    log[guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[guild.id].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    if (userID === client.user.id) return;///By ALzahrani#4752
///By ALzahrani#4752
    let unBanInfo = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[UNBANNED]**")///By ALzahrani#4752
      .setThumbnail(userAvatar)///By ALzahrani#4752
      .setColor("GREEN")///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(guild.name, guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(unBanInfo);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("guildMemberUpdate", (oldMember, newMember) => {///By ALzahrani#4752
  if (!oldMember.guild) return;///By ALzahrani#4752
  if (!log[oldMember.guild.id])///By ALzahrani#4752
    log[oldMember.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[oldMember.guild.id].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = oldMember.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  oldMember.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
    var userTag = logs.entries.first().executor.tag;///By ALzahrani#4752
///By ALzahrani#4752
    if (oldMember.nickname !== newMember.nickname) {///By ALzahrani#4752
      if (oldMember.nickname === null) {///By ALzahrani#4752
        var oldNM = "`اسمه الاصلي`";///By ALzahrani#4752
      } else {///By ALzahrani#4752
        var oldNM = oldMember.nickname;///By ALzahrani#4752
      }///By ALzahrani#4752
      if (newMember.nickname === null) {///By ALzahrani#4752
        var newNM = "`اسمه الاصلي`";///By ALzahrani#4752
      } else {///By ALzahrani#4752
        var newNM = newMember.nickname;///By ALzahrani#4752
      }///By ALzahrani#4752
///By ALzahrani#4752
      let updateNickname = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[UPDATE MEMBER NICKNAME]**")///By ALzahrani#4752
        .setThumbnail(userAvatar)///By ALzahrani#4752
        .setColor("BLUE")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(updateNickname);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (oldMember.roles.size < newMember.roles.size) {///By ALzahrani#4752
      let role = newMember.roles///By ALzahrani#4752
        .filter(r => !oldMember.roles.has(r.id))///By ALzahrani#4752
        .first();///By ALzahrani#4752
      if (!log[oldMember.guild.id])///By ALzahrani#4752
        log[oldMember.guild.id] = {///By ALzahrani#4752
          onoff: "Off"///By ALzahrani#4752
        };///By ALzahrani#4752
      if (log[oldMember.guild.id].onoff === "Off") return;///By ALzahrani#4752
      let roleAdded = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[ADDED ROLE TO MEMBER]**")///By ALzahrani#4752
        .setThumbnail(oldMember.guild.iconURL)///By ALzahrani#4752
        .setColor("GREEN")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(userTag, userAvatar);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(roleAdded);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (oldMember.roles.size > newMember.roles.size) {///By ALzahrani#4752
      let role = oldMember.roles///By ALzahrani#4752
        .filter(r => !newMember.roles.has(r.id))///By ALzahrani#4752
        .first();///By ALzahrani#4752
      if (!log[oldMember.guild.id])///By ALzahrani#4752
        log[oldMember.guild.id] = {///By ALzahrani#4752
          onoff: "Off"///By ALzahrani#4752
        };///By ALzahrani#4752
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;///By ALzahrani#4752
      let roleRemoved = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")///By ALzahrani#4752
        .setThumbnail(oldMember.guild.iconURL)///By ALzahrani#4752
        .setColor("RED")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(userTag, userAvatar);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(roleRemoved);///By ALzahrani#4752
    }///By ALzahrani#4752
  });///By ALzahrani#4752
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {///By ALzahrani#4752
    if (!log[oldMember.guild.id])///By ALzahrani#4752
      log[oldMember.guild.id] = {///By ALzahrani#4752
        onoff: "Off"///By ALzahrani#4752
      };///By ALzahrani#4752
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;///By ALzahrani#4752
    let newOwner = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[UPDATE GUILD OWNER]**")///By ALzahrani#4752
      .setThumbnail(oldMember.guild.iconURL)///By ALzahrani#4752
      .setColor("GREEN")///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(newOwner);///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("voiceStateUpdate", (voiceOld, voiceNew) => {///By ALzahrani#4752
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;///By ALzahrani#4752
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))///By ALzahrani#4752
    return;///By ALzahrani#4752
  if (!log[voiceOld.guild.id])///By ALzahrani#4752
    log[voiceOld.guild.id] = {///By ALzahrani#4752
      onoff: "Off"///By ALzahrani#4752
    };///By ALzahrani#4752
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;///By ALzahrani#4752
  var logChannel = voiceOld.guild.channels.find(///By ALzahrani#4752
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`///By ALzahrani#4752
  );///By ALzahrani#4752
  if (!logChannel) return;///By ALzahrani#4752
///By ALzahrani#4752
  voiceOld.guild.fetchAuditLogs().then(logs => {///By ALzahrani#4752
    var userID = logs.entries.first().executor.id;///By ALzahrani#4752
    var userTag = logs.entries.first().executor.tag;///By ALzahrani#4752
    var userAvatar = logs.entries.first().executor.avatarURL;///By ALzahrani#4752
///By ALzahrani#4752
    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {///By ALzahrani#4752
      let serverMutev = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[VOICE MUTE]**")///By ALzahrani#4752
        .setThumbnail(///By ALzahrani#4752
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"///By ALzahrani#4752
        )///By ALzahrani#4752
        .setColor("RED")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(userTag, userAvatar);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(serverMutev);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {///By ALzahrani#4752
      if (!log[voiceOld.guild.id])///By ALzahrani#4752
        log[voiceOld.guild.id] = {///By ALzahrani#4752
          onoff: "Off"///By ALzahrani#4752
        };///By ALzahrani#4752
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;///By ALzahrani#4752
      let serverUnmutev = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[VOICE UNMUTE]**")///By ALzahrani#4752
        .setThumbnail(///By ALzahrani#4752
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"///By ALzahrani#4752
        )///By ALzahrani#4752
        .setColor("GREEN")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(userTag, userAvatar);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(serverUnmutev);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {///By ALzahrani#4752
      if (!log[voiceOld.guild.id])///By ALzahrani#4752
        log[voiceOld.guild.id] = {///By ALzahrani#4752
          onoff: "Off"///By ALzahrani#4752
        };///By ALzahrani#4752
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;///By ALzahrani#4752
      let serverDeafv = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[VOICE DEAF]**")///By ALzahrani#4752
        .setThumbnail(///By ALzahrani#4752
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"///By ALzahrani#4752
        )///By ALzahrani#4752
        .setColor("RED")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(userTag, userAvatar);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(serverDeafv);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {///By ALzahrani#4752
      if (!log[voiceOld.guild.id])///By ALzahrani#4752
        log[voiceOld.guild.id] = {///By ALzahrani#4752
          onoff: "Off"///By ALzahrani#4752
        };///By ALzahrani#4752
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;///By ALzahrani#4752
      let serverUndeafv = new Discord.RichEmbed()///By ALzahrani#4752
        .setTitle("**[VOICE UNDEAF]**")///By ALzahrani#4752
        .setThumbnail(///By ALzahrani#4752
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"///By ALzahrani#4752
        )///By ALzahrani#4752
        .setColor("GREEN")///By ALzahrani#4752
        .setDescription(///By ALzahrani#4752
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`///By ALzahrani#4752
        )///By ALzahrani#4752
        .setTimestamp()///By ALzahrani#4752
        .setFooter(userTag, userAvatar);///By ALzahrani#4752
///By ALzahrani#4752
      logChannel.send(serverUndeafv);///By ALzahrani#4752
    }///By ALzahrani#4752
  });///By ALzahrani#4752
///By ALzahrani#4752
  if (///By ALzahrani#4752
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&///By ALzahrani#4752
    voiceNew.voiceChannel &&///By ALzahrani#4752
    voiceOld.voiceChannel != null///By ALzahrani#4752
  ) {///By ALzahrani#4752
    if (!log[voiceOld.guild.id])///By ALzahrani#4752
      log[voiceOld.guild.id] = {///By ALzahrani#4752
        onoff: "Off"///By ALzahrani#4752
      };///By ALzahrani#4752
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;///By ALzahrani#4752
    let voiceLeave = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("**[CHANGED VOICE ROOM]**")///By ALzahrani#4752
      .setColor("GREEN")///By ALzahrani#4752
      .setThumbnail(voiceOld.user.avatarURL)///By ALzahrani#4752
      .setDescription(///By ALzahrani#4752
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`///By ALzahrani#4752
      )///By ALzahrani#4752
      .setTimestamp()///By ALzahrani#4752
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);///By ALzahrani#4752
///By ALzahrani#4752
    logChannel.send(voiceLeave);///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752





///By ALzahrani#4752




//كود تثبيت البوت في روم
///By ALzahrani#4752
client.on("ready", () => {///By ALzahrani#4752
  const channel = client.channels.get("");///By ALzahrani#4752
  if (!channel) return console.error("The channel does not exist!");///By ALzahrani#4752
  channel.join().then(connection => {///By ALzahrani#4752
    console.log("Successfully connected.");///By ALzahrani#4752
  }).catch(e => {///By ALzahrani#4752
    console.error(e);///By ALzahrani#4752
  });///By ALzahrani#4752
});///By ALzahrani#4752
///By ALzahrani#4752
client.on("ready", () => {///By ALzahrani#4752
  console.log("-_-");///By ALzahrani#4752
});///By ALzahrani#4752



///By ALzahrani#4752



//كود تفعيل

///By ALzahrani#4752




   ///By ALzahrani#4752
  ///By ALzahrani#4752
 ///By ALzahrani#4752
///By ALzahrani#4752






///By ALzahrani#4752





//كود تحريك المستخدمين لرومك فقط
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  if (!message.channel.guild) return;///By ALzahrani#4752
  if (message.content.startsWith(prefix + "move")) {///By ALzahrani#4752
    if (message.member.hasPermission("MOVE_MEMBERS")) {///By ALzahrani#4752
      if (message.mentions.users.size === 0) {///By ALzahrani#4752
        return message.channel.send("``Use : " + prefix + "move @User``");///By ALzahrani#4752
      }///By ALzahrani#4752
      if (message.member.voiceChannel != null) {///By ALzahrani#4752
        if (message.mentions.members.first().voiceChannel != null) {///By ALzahrani#4752
          var authorchannel = message.member.voiceChannelID;///By ALzahrani#4752
          var usermentioned = message.mentions.members.first().id;///By ALzahrani#4752
          var embed = new Discord.RichEmbed()///By ALzahrani#4752
            .setTitle("Succes!")///By ALzahrani#4752
            .setColor("#000000")///By ALzahrani#4752
            .setDescription(///By ALzahrani#4752
              `✅ You Have Moved <@${usermentioned}> To Your Channel `///By ALzahrani#4752
            );///By ALzahrani#4752
          var embed = new Discord.RichEmbed()///By ALzahrani#4752
            .setTitle(`You are Moved in ${message.guild.name} `)///By ALzahrani#4752
            .setColor("RANDOM")///By ALzahrani#4752
            .setTitle(`✽ **-_-**`)///By ALzahrani#4752
///By ALzahrani#4752
            .setDescription(///By ALzahrani#4752
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`///By ALzahrani#4752
            );///By ALzahrani#4752
          message.guild.members///By ALzahrani#4752
            .get(usermentioned)///By ALzahrani#4752
            .setVoiceChannel(authorchannel)///By ALzahrani#4752
            .then(m => message.channel.send(embed));///By ALzahrani#4752
          message.guild.members.get(usermentioned).send(embed);///By ALzahrani#4752
        } else {///By ALzahrani#4752
          message.channel.send(///By ALzahrani#4752
            "`You Cant Move" +///By ALzahrani#4752
              message.mentions.members.first() +///By ALzahrani#4752
              " `The User Should Be In channel To Move It`"///By ALzahrani#4752
          );///By ALzahrani#4752
        }///By ALzahrani#4752
      } else {///By ALzahrani#4752
        message.channel.send(///By ALzahrani#4752
          "**``You Should Be In Room Voice To Move SomeOne``**"///By ALzahrani#4752
        );///By ALzahrani#4752
      }///By ALzahrani#4752
    } else {///By ALzahrani#4752
      message.react("❌");///By ALzahrani#4752
    }///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752
 























///By ALzahrani#4752






































///By ALzahrani#4752






//كود فك الباند
///By ALzahrani#4752

client.on("message", message => {///By ALzahrani#4752
  let command = message.content.split(" ")[0];///By ALzahrani#4752
  if (command == prefix + "unban") {///By ALzahrani#4752
    if (!message.member.hasPermission("BAN_MEMBERS")) return;///By ALzahrani#4752
    let args = message.content///By ALzahrani#4752
      .split(" ")///By ALzahrani#4752
      .slice(1)///By ALzahrani#4752
      .join(" ");///By ALzahrani#4752
    if (args == "allllll") {///By ALzahrani#4752
      message.guild.fetchBans().then(zg => {///By ALzahrani#4752
        zg.forEach(Saad => {///By ALzahrani#4752
          message.guild.unban(Saad);///By ALzahrani#4752
        });///By ALzahrani#4752
      });///By ALzahrani#4752
      return message.channel.send("**✅ Unbanned all members **");///By ALzahrani#4752
    }///By ALzahrani#4752
    if (!args) return message.channel.send("**Please Type the member ID**");///By ALzahrani#4752
    message.guild///By ALzahrani#4752
      .unban(args)///By ALzahrani#4752
      .then(m => {///By ALzahrani#4752
        message.channel.send(///By ALzahrani#4752
          `**-** **Done Unbanned ${m.username}**`///By ALzahrani#4752
        );///By ALzahrani#4752
      })///By ALzahrani#4752
      .catch(stry => {///By ALzahrani#4752
        message.channel.send(///By ALzahrani#4752
          `**-** **I can't find \`${args}\` in the ban list**`///By ALzahrani#4752
        );///By ALzahrani#4752
      });///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752










///By ALzahrani#4752
















////كود الباند
///By ALzahrani#4752
client.on("message", message => {///By ALzahrani#4752
  var ms = require("ms");///By ALzahrani#4752
///By ALzahrani#4752
  var moment = require("moment");///By ALzahrani#4752
///By ALzahrani#4752
  if (message.author.bot) return;///By ALzahrani#4752
///By ALzahrani#4752
  if (!message.content.startsWith(prefix)) return;///By ALzahrani#4752
///By ALzahrani#4752
  let command = message.content.split(" ")[0];///By ALzahrani#4752
///By ALzahrani#4752
  command = command.slice(prefix.length);///By ALzahrani#4752
///By ALzahrani#4752
  let args = message.content.split(" ").slice(1);///By ALzahrani#4752
///By ALzahrani#4752
  let messageArray = message.content.split(" ");///By ALzahrani#4752
///By ALzahrani#4752
  let embed = new Discord.RichEmbed().setImage(///By ALzahrani#4752
    "https://1.top4top.net/p_1410p11ou1.png"///By ALzahrani#4752
  );///By ALzahrani#4752
///By ALzahrani#4752
  if (command == "ban") {///By ALzahrani#4752
    if (!message.channel.guild)///By ALzahrani#4752
      return message.reply(///By ALzahrani#4752
        " **This command only for servers**"///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))///By ALzahrani#4752
      return message.reply(///By ALzahrani#4752
        " **You Don't Have ` BAN_MEMBERS ` Permission**"///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))///By ALzahrani#4752
      return message.reply(///By ALzahrani#4752
        " **I Don't Have ` BAN_MEMBERS ` Permission**"///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    let user = message.mentions.users.first();///By ALzahrani#4752
///By ALzahrani#4752
    let Reason = message.content///By ALzahrani#4752
      .split(" ")///By ALzahrani#4752
      .slice(3)///By ALzahrani#4752
      .join(" ");///By ALzahrani#4752
///By ALzahrani#4752
    let time = messageArray[2];///By ALzahrani#4752
///By ALzahrani#4752
    if (message.mentions.users.size < 1)///By ALzahrani#4752
      return message.channel.sendEmbed(embed);///By ALzahrani#4752
///By ALzahrani#4752
    if (!message.guild.member(user).bannable)///By ALzahrani#4752
      return message.reply(///By ALzahrani#4752
        "  **I Don't Have Permission For Ban This User**"///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    if (!time.match(/[1-60][s,m,h,d,w]/g))///By ALzahrani#4752
      return message.channel.send(///By ALzahrani#4752
        " This Time Is Incorrect"///By ALzahrani#4752
      );///By ALzahrani#4752
///By ALzahrani#4752
    if (!Reason) {///By ALzahrani#4752
      message.guild.member(user).ban({ reason: Reason });///By ALzahrani#4752
    }///By ALzahrani#4752
///By ALzahrani#4752
    if (!Reason && time) {///By ALzahrani#4752
      message.guild.member(user).ban(7, user);///By ALzahrani#4752
    }///By ALzahrani#4752
///By ALzahrani#4752
    if (!time) {///By ALzahrani#4752
      message.guild.member(user).ban(7, user);///By ALzahrani#4752
    }///By ALzahrani#4752
    if (time) {///By ALzahrani#4752
      setTimeout(() => {///By ALzahrani#4752
        message.guild.unban(user);///By ALzahrani#4752
      }, ms(time));///By ALzahrani#4752
    }///By ALzahrani#4752
///By ALzahrani#4752
    if (time && Reason && user) {///By ALzahrani#4752
      message.guild.member(user).ban({ reason: Reason });///By ALzahrani#4752
///By ALzahrani#4752
      setTimeout(() => {///By ALzahrani#4752
        message.guild.unban(user);///By ALzahrani#4752
      }, ms(time));///By ALzahrani#4752
    }///By ALzahrani#4752
///By ALzahrani#4752
    message.channel.send(///By ALzahrani#4752
      `  **${user.tag} banned from the server ! :airplane: **`///By ALzahrani#4752
    );///By ALzahrani#4752
  }///By ALzahrani#4752
});///By ALzahrani#4752

//////////



























///By ALzahrani#4752































//كود الترحيب في الخاص
///By ALzahrani#4752

client.on("guildMemberAdd", member => {///By ALzahrani#4752
  member.createDM().then(function (channel) {///By ALzahrani#4752
      const Embed11 = new Discord.RichEmbed()///By ALzahrani#4752
        .setColor("BLACK")///By ALzahrani#4752
.setThumbnail(client.guild.iconurl)///By ALzahrani#4752
  .setDescription(`:rose:  اهلا ${member}:rose: 
  **حياك الله في سيرفر الكلان**   
**رجاءً اقرا القوانين الي في روم فعل نفسك لتجنب الحضر والميوت وأضغط على الرياكشن الطريقة واضحة وبسيطة**
**وشكرا لدخولك السيرفر** 
**استمتع**
:checkered_flag: تاريخ انضمامك للسيرفر ${member.joinedAt.toLocaleString()} :checkered_flag:`)///By ALzahrani#4752 
return channel.sendEmbed(Embed11)///By ALzahrani#4752
///By ALzahrani#4752
}).catch(console.error)///By ALzahrani#4752
})///By ALzahrani#4752












///By ALzahrani#4752













//كود حظر السب والنشر 
///By ALzahrani#4752


client.on('message', async message => {///By ALzahrani#4752
            if(message.content.includes('discord.gg')){///By ALzahrani#4752
                if(message.member.hasPermission("MANAGE_GUILD")) return;///By ALzahrani#4752
        if(!message.channel.guild) return;///By ALzahrani#4752
        message.delete()///By ALzahrani#4752
          var command = message.content.split(" ")[0];///By ALzahrani#4752
    let muterole = message.guild.roles.find(`name`, "Muted");///By ALzahrani#4752
    if(!muterole){///By ALzahrani#4752
      try{///By ALzahrani#4752
        muterole = await message.guild.createRole({///By ALzahrani#4752
          name: "Muted",///By ALzahrani#4752
          color: "#000000",///By ALzahrani#4752
          permissions:[]///By ALzahrani#4752
        })///By ALzahrani#4752
        message.guild.channels.forEach(async (channel, id) => {///By ALzahrani#4752
          await channel.overwritePermissions(muterole, {///By ALzahrani#4752
            SEND_MESSAGES: false,///By ALzahrani#4752
            ADD_REACTIONS: false///By ALzahrani#4752
          });///By ALzahrani#4752
        });///By ALzahrani#4752
      }catch(e){///By ALzahrani#4752
        console.log(e.stack);///By ALzahrani#4752
      }///By ALzahrani#4752
    }///By ALzahrani#4752
           if(!message.channel.guild) return message.reply('** This command only for servers**');///By ALzahrani#4752
     message.member.addRole(muterole);///By ALzahrani#4752
    const embed500 = new Discord.RichEmbed()///By ALzahrani#4752
      .setTitle("Muted Ads")///By ALzahrani#4752
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link OR SWEARING**`)///By ALzahrani#4752
            .setColor("c91616")///By ALzahrani#4752
            .setThumbnail(`${message.author.avatarURL}`)///By ALzahrani#4752
            .setAuthor(message.author.username, message.author.avatarURL)///By ALzahrani#4752
        .setFooter(`${message.guild.name} `)///By ALzahrani#4752
     message.channel.send(embed500)///By ALzahrani#4752
     message.author.send('`تم إعطائك ميوت لنشرك لسيرفر أو انك سبيت كلم الإدارة لمراجعة الأمر`');///By ALzahrani#4752
   ///By ALzahrani#4752
       ///By ALzahrani#4752
    }///By ALzahrani#4752
})///By ALzahrani#4752








///By ALzahrani#4752



///By ALzahrani#4752














client.on ('message', async (ALzahrani) => {                   ///By ALzahrani#4752
  if (!ALzahrani.guild || ALzahrani.author.bot) return false;                  ///By ALzahrani#4752
  var prefix = "=";                       ///By ALzahrani#4752
  switch (ALzahrani.content.split(' ') [0]){                               ///By ALzahrani#4752
    case'رابط':                              ///By ALzahrani#4752
      ALzahrani.guild.channels.get (ALzahrani.channel.id).createInvite({maxUses: 10}).then ((url) => {               ///By ALzahrani#4752
    ///By ALzahrani#4752
        ALzahrani.author.send ("تم انشاء رابط\nمدى الرابط: يوم\nاقصى حد للاستخدام: 10\n"+url);
                                            ///By ALzahrani#4752
        ALzahrani.channel.send("Check Your DM.");
})                                 ///By ALzahrani#4752
      break;              ///By ALzahrani#4752
  }                                                                  ///By ALzahrani#4752
})              ///By ALzahrani#4752
      ///By ALzahrani#4752
//off
/*

///////////////////////كود ارسال رسالة محددة في روم محدد بدون امبد

if(message.content.startsWith(prefix + 'say')){
let gg = message.mentions.channels.first();
if(!gg) return message.channel.send('Please  mention channel.');
let jj = message.content.split(/ +/).slice(2).join(' ');
if(!jj) return message.channel.send('Please write message to send');
message.guild.channels.get(gg.id).send(jj).catch(yy => {});
message.channel.send('Done').then(ff => ff.react("✅")).catch(yy => {});
}
 
/////////////////////// كود ارسال صوره محددة في روم محدد بدون امبد
 
if(message.content.startsWith( prefix + 'image')){
let gg = message.mentions.channels.first();
if(!gg) return message.channel.send('Please  mention channel.');
let jj = message.content.split(/ +/).slice(2).join(' ');
if(!jj) return message.channel.send('Please send img url.');
message.guild.channels.get(gg.id).send({
files: [{ name:"sender.png", attachment:jj}]
}).catch(yy => { message.channel.send("Invaild URL")});
 
message.channel.send('Done').then(ff => ff.react("✅")).catch(yy => {});
}

}
*/

///By ALzahrani#4752
///By ALzahrani#4752


