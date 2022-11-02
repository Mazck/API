module.exports.config = {
  name: "autosend",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "a",
  description: "a",
  commandCategory: "a",
  usages: "a",
  cooldowns: 5,
};
const fs = require("fs");
module.exports.onLoad = ({ }) => {
  if (!fs.existsSync(__dirname + '/../../includes/cache/thread.json'))
    fs.writeFileSync(__dirname + '/../../includes/cache/thread.json', '[]');

  if (!fs.existsSync(__dirname + '/../../includes/cache/data.json'))
    fs.writeFileSync(__dirname + '/../../includes/cache/data.json', JSON.stringify({ autosned: true }, null, 2)
    );
}
module.exports.handleEvent = async ({ event, api }) => {
  const data = JSON.parse(fs.readFileSync(__dirname + "/../../includes/cache/thread.json", "utf-8"))
  const { threadID } = event
  if (event.isGroup == false) {
    return;
  }
  else {
    data.push(threadID)
    fs.writeFileSync(__dirname + "/../../includes/cache/thread.json", JSON.stringify(data, null, 2));
  }
}
module.exports.run = async function ({ api, event }) {
  const a = require('/../../includes/cache/data.json');
  a.autosned = !a.autosned;
  fs.writeFileSync(
    __dirname + '/../../includes/cache/data.json',
    JSON.stringify(a, null, 2)
  );
  return api.sendMessage(
    `Đã ${a.autosned ? "bật" : "tắt"} autosend.`,
    event.threadID,
    event.messageID
  );
};
