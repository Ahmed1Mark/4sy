const { Client, Intents, MessageAttachment, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const { loadImage, Canvas} = require("canvas-constructor/cairo")
const Keyv = require('keyv');
const { inviteTracker } = require("discord-inviter");
const rules = require('./rules.json');
const fs = require('fs');
const { startServer } = require("./alive.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const db = new Keyv('sqlite://./storage/database.sqlite');

const ytdl = require('ytdl-core');


db.on('error', err => console.log('Connection Error', err));

const {
    token,
    prefix
} = require('./config.json')
let canvax = require('canvas')
canvax.registerFont("./storage/Uni Sans Heavy.otf", { family: 'Discord' })
canvax.registerFont("./storage/DejaVuSansCondensed-Bold.ttf", { family: 'Discordx' })
const client = new Client({
    intents: ["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]
  }) // Declare client to be a new Discord Client (bot)
require('http').createServer((req, res) => res.end(`
Dveloper Bot : Ahmed Clipper
Server Support : https://dsc.gg/clipper-tv
`)).listen(3000) //Dont remove this 
  /*
  Code Below provides info about the bot 
  once it's ready
  */





let tracker = "10";

require("events").EventEmitter.defaultMaxListeners = 30;
  tracker = new inviteTracker(client);
	// "guildMemberAdd"  event to get full invite data
tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  // return when get error
  if(error) return console.error(error);
  // get the channel
  let channel = member.guild.channels.cache.get("1226527256462098442"),
    Msg = `${member.user} has been invited by <@!${inviter.id}> and has now ${invite.count} invites**.**`;
  // change welcome message when the member is bot
  if (member.user.bot)
    Msg = `${member.user} bot discord invited by <@!${inviter.id}>**.**`;
  // send welcome message
  channel.send(Msg);
});
//Fix Erorr Project
process.on("uncaughtException" , err => {
return;
})
 
process.on("unhandledRejection" , err => {
return;
})
 
process.on("rejectionHandled", error => {
  return;
});
client.on('ready', () => {
  console.log(``);
  console.log(`</> Logged in as : ${client.user.tag}!`);
  console.log(`</> Servers : ${client.guilds.cache.size}`);
  console.log(`</> Users : ${client.users.cache.size}`);
  console.log(`</> channels : ${client.channels.cache.size}`);
  console.log(`</> Name : ${client.user.username}`);
  client.user.setStatus('idle');///dnd/online/idle
  let status = [`By : Ahmed Clipper`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})


let nextAzkarIndex = 0;

client.on("messageCreate", async (black) => {
    if (black.content.startsWith(prefix + "ping")) {
        black.channel.send({
            embeds: [
                new MessageEmbed()
                    .setDescription(`> ⚙ **Please Wait...**`)
            ]
        }).then((m) => {
            setTimeout(() => {
                m.edit({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`> \`-\` **My Ping Is :** \`${client.ws.ping}\``)
                            .setTimestamp()
                    ]
                });
            }, 5000);
        });
    }
});



/////////////////////////////////

  
///////////////////////////////////
client.on('messageCreate', async message => {
  if (message.content === `${prefix}role-list`) {
    if (message.member.permissions.has("ADMINISTRATOR")) {
      
      const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('List of Laws')
            .addOptions(rules.map(rule => ({
              label: rule.title,
              description: rule.id,
              value: rule.id,
            }))),
        );
         // Fetch the description from the database
   let image = await db.get(`description_${message.guild.id}`);
      
      const guild = message.guild;
      
      const embed = new MessageEmbed()
      
        .setColor('#2c2c34')
        .setThumbnail(guild.iconURL())
        .setTitle('<a:3_:1089615585232556204> Server Rules <a:12:1150947511146664017>')
        .setDescription(' <a:11:1150943009442107523> to read the laws, choose from the list below \n  <a:11:1150943009442107523> please do not violate server rules \n\n <:921703781027184660:1089615608154431579> **__Developer BOT__** <@803873969168973855> <:911751899324239902:1089615602471141416>')
        .setImage(`${image}`)

      const sentMessage = await message.channel.send({ embeds: [embed], components: [row] });
      await message.delete();
    } else {
      await message.reply({ content: "You need to be an administrator to use this command.", ephemeral: true });
    }
  }
});

client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    const rule = rules.find(r => r.id === interaction.values[0]);
    const text = fs.readFileSync(rule.description, 'utf-8');
    const ruleEmbed = new MessageEmbed()
      .setColor('#2c2c34')
      .setTitle(rule.title)
      .setDescription(text)

    await interaction.reply({ embeds: [ruleEmbed], ephemeral: true });
  }
});
  
//////////////////////////////////
///////////////////////////////////
/////////////////////////////////
  

  
  


client.on("messageCreate", (message) => {
  if (message.channel.id != "1156620658969694229") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤍");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420062545027113") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤍");
});

client.on("messageCreate", (message) => {
  if (message.channel.id != "1156620658969694229") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤲");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420062545027113") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤲");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1151010498951782450") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤣");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420208901070888") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤣");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1151010498951782450") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("😹");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420208901070888") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("😹");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420005284380725") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("✅");
});

client.on("messageCreate", (message) => {
  if (message.content === "مرحبا") {
    message.reply("مرحبا بك!");
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "السلام عليكم") {
    message.reply("❤ عليكم السلام ياجميل منور السيرفر والله ❤");
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "صلي علي النبي") {
    message.reply("❤ **عليه الصلاة والسلام** ❤");
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "تيست") {
    message.reply("الحمدلله انا كا بوت شايف شغلي تمام انت بقي عامل ايه");
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "هلا") {
    message.reply("❤ هلا بيك شلونك حبيبي منور السيرفر ❤");
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "Kraken System") {
    message.reply("اتفضل يانجم انا تحت أمرك");
  }
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "saym")) {
    const args = message.content.slice(prefix.length + "saym".length).trim();
    const user = message.author;
    if (!args) return message.reply("Please provide me a message! ⚠️");
    message.channel.send(args);
  }
});




  /* Client when detects a message 
  then execute the code */
  client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "help") {
        message.reply({
          embeds: [ new MessageEmbed()
            .setDescription(`> **__All  Commands__** 
\n **!add** \n **!ping** \n **!role-list** \n **!channel** \n **!ruleschannel** \n  **!background** \n **!setchannel** \n **!setruleschannel** \n **!setbackground**`)
            .setColor("#2F3136")
          ]
        })
    }
    if(command === "ping02") {
      message.reply(`> \`-\` **My Ping Is :** \`${client.ws.ping}\``)
    }
    if(command === "add") {
     client.emit("guildMemberAdd", message.member)
    }
    if(command === "setchannel") {
      if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
      let channel = message.mentions.channels.first()
      if(!channel) return message.reply(`:x: | Missing arguments, required \`<channel>\`\n __Example__: ${prefix}setchannel ${message.channel}`)
      await db.set(`${message.guild.id}`, channel.id)
      message.reply({
        embeds: [ new MessageEmbed()
          .setDescription(`👍 | Successfully set the welcome channel to ${channel}`)
          .setColor("#2F3136")
          .setTimestamp()
        ]
      })
    }
    if(command === "channel") {
      let channel = await db.get(`${message.guild.id}`)
      if(channel) {
        message.reply({
          embeds: [ new MessageEmbed()
            .setDescription(`📝 | The welcome channel is set to ${message.guild.channels.cache.get(channel)}`)
            .setColor("#2F3136")
            .setTimestamp()
          ]
        })
      }
    }
    if(command === "setbackground"){
      if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
      if(args[0] && !args[0].startsWith("http")) return message.reply("Please provide a valid URL for an image **or** upload an image to set as background.")
      let background = message.attachments.first() ? message.attachments.first().url : args[0]
      if(!background) return message.reply(`:x: | Missing arguments, required \`<background>\`\n __Example__: ${prefix}setbackground <attachment> [ Can be URL or an uploaded image ]`)
      await db.set(`bg_${message.guild.id}`, background)
      message.reply({
        embeds: [ new MessageEmbed()
          .setDescription(`👍 | Successfully set the background to [this image](${background})`)
          .setImage(background)
          .setColor("#2F3136")
          .setTimestamp()
        ]
      })
    }
    if(command === "background") {
    let background = await db.get(`bg_${message.guild.id}`)
    if(background) {
      message.reply({
        embeds: [ new MessageEmbed()
          .setDescription(`📝 | The background is set to [this image](${background})`)
          .setImage(background)
          .setColor("#2F3136")
          .setTimestamp()
        ]
      })
    }
  }
if(command === "setruleschannel"){
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
  if(!args[0]) return message.reply("Please provide a description to set.")

  let description = args.join(" ")
  
  // Save the description text instead of the image URL
  await db.set(`description_${message.guild.id}`, description)
  
  message.reply({
    embeds: [ new MessageEmbed()
      .setDescription(`👍 | Successfully set the description to: **${description}**`)
      .setColor("#2F3136")
      .setTimestamp()
    ]
  })
}
if(command === "setimage"){
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
  if(!args[0]) return message.reply("Please provide a description to set.")

  let image = args.join(" ")
  
  // Save the description text instead of the image URL
  await db.set(`description_${message.guild.id}`, image)
  
  message.reply({
    embeds: [ new MessageEmbed()
      .setDescription(`👍 | Successfully set the description to: **${image}**`)
      .setColor("#2F3136")
      .setTimestamp()
    ]
  })
}
if(command === "image") {
  let image = await db.get(`description_${message.guild.id}`)
  if(image) {
    message.reply({
      embeds: [ new MessageEmbed()
        .setDescription(`📝 | The description is set to: **${image}**`)
        .setColor("#2F3136")
        .setTimestamp()
      ]
    })
  }
}

if(command === "ruleschannel") {
  let description = await db.get(`description_${message.guild.id}`)
  if(description) {
    message.reply({
      embeds: [ new MessageEmbed()
        .setDescription(`📝 | The description is set to: **${description}**`)
        .setColor("#2F3136")
        .setTimestamp()
      ]
    })
  }
}

}

);
/* Client when detects 
a new member join */
  tracker = new inviteTracker(client);
// "guildMemberAdd"  event to get full invite data
tracker.on('guildMemberAdd', async (member, inviter, invite, error) => {
  let channelwelc = await db.get(`${member.guild.id}`)
  if(error) return console.error(error);
  if(!channelwelc) return;
  let channel = member.guild.channels.cache.get(channelwelc)
   let buffer_attach =  await generareCanvas(member)
   const attachment = new MessageAttachment(buffer_attach, 'welcome.png')
   const memberCount = member.guild.memberCount;


   // Fetch the description from the database
   let description = await db.get(`description_${member.guild.id}`);

   let embed = new MessageEmbed()
      .setTitle(`> <:TAG:1226019707522383932> Welcome to __${member.guild.name}__ Community`)
      .addFields(
        { name: '<:WELCOME:1226013126408015942> Welcome', value: `${member.user}`, inline: true },
        { name: '<:INVITED:1226013134276530206> Invited By', value: `<@!${inviter.id}>`, inline: true },
        { name: '<:READ:1226013136977526876> Rules', value: `${description}`, inline: true }, // Using the fetched description here
        { name: '<:USER_ID:1226013131382456453> User ID', value: `\`\`${member.user.id}\`\``, inline: true },
        { name: '<:NUMPER:1226014852649320468> Member Count', value: `**\`\`${memberCount}\`\`**`, inline: true },
        { name: '<:LINK2:1226039636913295401> Invite Number', value: `**\`\`${invite.count}\`\`**`, inline: true },
        { name: '<:TIME:1226034289963958415> Message Since', value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true },
        { name: '<:JOINED:1226013128739786834> Joined Discord', value: `<t:${Math.floor(member.user.createdAt / 1000)}:R>`, inline: true },
        { name: '<:SHARDS:1226039084829511791> Member User', value: `**\`\`${member.user.username}\`\`**`, inline: true },
        { name: '<:API:1226286011009597541> Node.js Version', value: `**__\`\`v21.7.2\`\`__**`, inline: true },
        { name: '<:PING:1226286013379514368> PING BOT', value: `**__\`\`${client.ws.ping}ms\`\`__**`, inline: true },
        { name: '<:DEVELOPER:1226013123916599437> Developer BOT ', value: `<@803873969168973855>`, inline: true },
        { name: '<:SUPPORT:1226013120674136144> Server Support ', value: `**[Click Here](https://dsc.gg/kn-server)**`, inline: true },
        { name: '<:LINK:1226015186436100178> Instagram ', value: `**[Click Here](https://www.instagram.com/ahm.depression)**`, inline: true },
        { name: '<:LINK2:1226039636913295401> Twitter', value: `**[Click Here](https://twitter.com/ahm_depression)**`, inline: true }
      )
    .setColor('#2F3136')
    .setImage("attachment://welcome.png")
    member.send(`Welcome to the server, ${member}!`);

    channel.send({ content: `||${member.user}||`, embeds: [embed], files: [attachment] })
})


client.on('guildMemberAdd', member => {
    const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome to the server!')
        .setDescription(`We are happy to have you, ${member}! Welcome to our community.`)
        .setThumbnail(member.user.displayAvatarURL());

    member.send({ embeds: [embed] });
});


async function generareCanvas(member) {
  const avatar = await loadImage(member.user.displayAvatarURL({ 'size': 2048, 'format': "png" }))
  const background = await loadImage(await db.get(`bg_${member.guild.id}`)) ?? await loadImage("https://cdn.discordapp.com/attachments/910400703862833192/910426253947994112/121177.png")
  const { weirdToNormalChars } = require('weird-to-normal-chars')
  const name = weirdToNormalChars(member.user.username)
  let canvas = new Canvas(1024, 450)
    .printImage(background, 0, 0, 1024, 450)
    .setColor("#FFFFFF")
    .printCircle(512, 155, 120)
    .printCircularImage(avatar, 512, 155, 115)
    .setTextAlign('center')
    .setTextFont('70px Discord')
    .printText(`Welcome`, 512, 355)
    .setTextAlign("center")
    .setColor("#FFFFFF")
    .setTextFont('45px Discordx')
    .printText(`${name}`, 512, 395)
    .setTextAlign("center")
    .setColor("#FFFFFF")
    .setTextFont('30px Discord')
    .printText(`To ${member.guild.name}`, 512, 430)
    // Adding "bot by ahmed" text above the image
    .setTextAlign('center')
    .setTextFont('bold 15px Arial')
    .setColor("#FFFFFF")
    .printText('</> Developer BOT Ahmed Clipper', 160, 25);
    // Adding "insta" text below the line
  canvas.setTextAlign('center')
    .setTextFont('bold 15px Arial')
    .setColor("#FFFFFF")
    .printText('</> instagram : ahm.depression', 150, 60);
  return canvas.toBufferAsync()
}



client.login(token)
