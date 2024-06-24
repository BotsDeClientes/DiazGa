let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `${pesan}`
let teks = `🕷️ 𝐃𝐈𝐀𝐙 𝐁𝐎𝐓 𝐈𝐍𝐕𝐎𝐂𝐀 𝐀 𝐓𝐎𝐃𝐎𝐒 🕷️\n\n❏ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒  :  *${participants.length}* ${oi}\n\n`;
  for (const mem of participants) {
    teks += `🕷️ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n𝐀𝐍𝐎𝐓𝐀𝐓𝐄 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀 ღ`;
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
