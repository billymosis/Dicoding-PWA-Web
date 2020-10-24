const webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BB8d6MTzrVf1jV74P4YKFO0-5_etsfNqMjZPOOU0VXgbVeVQMQ4_Q1yPIuS_69B7kKW9ijcOe_x5nlvHkmPsAsk",
  privateKey: "vz16WxodDFyFL0VbzKxJe6vaKOdtYtCadil2bzZjL_s",
};

webPush.setVapidDetails(
  "mailto:edo.billy@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/e-K55CFcxKw:APA91bExH7llyRjfMogRQgK94Jib8YqEj3WLTD-jd_3J80liZfuA_M8Hx3O3LyXjpfCfy0at2QU4hLDZI1Ru7YnIWCegMRQKAalanwocYu_h2RwFTWbyd_mheMgQcIIXcG5WBoNLtNAg",
  keys: {
    p256dh:
      "BNcPyYe1L5fFUUxzagNV/W0idsZgEypnhV/yuNNnwL0o0+DZxygZVsGkgu97o2g004ICJacTgXF0IDCCzs0AhOU=",
    auth: "R6M5L+Sf/WFEh1MUNW0EVQ==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "126195007564",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
