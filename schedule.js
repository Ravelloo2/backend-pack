const CronJob = require('node-cron')

exports.init = () => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
    console.log("Kör arbete bakom kulisserna")
  })
}