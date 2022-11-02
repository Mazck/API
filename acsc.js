    const schedule = require("node-schedule");
var allThread = require("./cache/data.json");
  const auto = require("./cache/data.json");
   if (auto.autosned == true) {
for (const idThread of allThread) {
const listTime = [6, 7, 8],
          minute = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15]
        schedule.scheduleJob({ hour: listTime, minute: minute }, function () {
          return api.sendMessage({
            body:
              `hiiiiiiiiiiii`,
            attachment: fs.createReadStream(__dirname + `/cache/video.mp4`)
          }, idThread)
        });
}
}
