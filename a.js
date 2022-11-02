module.exports.config = {
    name: "ccccccccccccccccccccc",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "a",
    description: "a"
};

module.exports.run = async function ({ api, event, Users, Threads }) {
    const fs = require("fs")
    const { threadID } = event
    const data = JSON.parse(fs.readFileSync(__dirname + "/../../includes/cache/thread.json", "utf-8"))
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) {
      const delthreadID =  data.filter(item => !threadID.includes(item))
        fs.writeFileSync(__dirname + "/../../includes/cache/thread.json", JSON.stringify(delthreadID, null, 2));
    }a
}
