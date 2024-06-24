const comandos = /piedra|papel|tijera|estado|verificar|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|registrar|deletesesion|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `𝘏𝘰𝘭𝘢 *@${m.sender.split`@`[0]}*, 𝘛𝘦 𝘚𝘢𝘭𝘶𝘥𝘢 𝘠𝘢𝘭𝘭𝘪𝘤𝘰 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘋𝘦𝘭 𝘉𝘰𝘵 𝘓𝘦 𝘙𝘦𝘤𝘶𝘦𝘳𝘥𝘰 𝘘𝘶𝘦 𝘌𝘴𝘵á 𝘗𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 𝘏𝘢𝘣𝘭𝘢𝘳𝘭𝘦 𝘈𝘭 𝘉𝘰𝘵.`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }, {ephemeralExpiration: 30})  
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nnn, nnnt, nnntt, nnnttt ].getRandom()
mensaje = `𝘖𝘵𝘳𝘢 𝘝𝘦𝘻 ? *@${m.sender.split`@`[0]}* 2𝘥𝘢 𝘈𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢 𝘓𝘢 3𝘳𝘢 𝘚𝘦𝘳á 𝘉𝘭𝘰𝘲𝘶𝘦𝘢𝘥@ 𝘗𝘰𝘳 𝘌𝘭 𝘉𝘰𝘵`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]} 🤨, 𝘚𝘦 𝘓𝘦 𝘈𝘷𝘪𝘴𝘰 𝘊𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳 𝘐𝘯𝘤𝘰𝘯𝘷𝘦𝘯𝘪𝘦𝘯𝘵𝘦 𝘌𝘴𝘤𝘳í𝘣𝘦𝘭𝘦 𝘈 𝘔𝘪 𝘊𝘳𝘦𝘢𝘥𝘰𝘳.

𝘕ú𝘮𝘦𝘳𝘰 : +51 926 933 818`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}

