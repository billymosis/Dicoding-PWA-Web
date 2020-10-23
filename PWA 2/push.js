const webPush = require('web-push');

const vapidKeys = {
  publicKey: "BB8d6MTzrVf1jV74P4YKFO0-5_etsfNqMjZPOOU0VXgbVeVQMQ4_Q1yPIuS_69B7kKW9ijcOe_x5nlvHkmPsAsk",
  privateKey: "vz16WxodDFyFL0VbzKxJe6vaKOdtYtCadil2bzZjL_s",
};

webPush.setVapidDetails(
  "mailto:edo.billy@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/fsYtY2abpxQ:APA91bF3UnRFit0EGGbZuzX1NKs0nPl8lDqHsMkZVQPnXi1ca7CF5DdXFSUbnnIwa8onZx4CYm9jiPkAkWtXAGSUoGyveBMzS1IAUClK8eqU1q4_WtcDUEQg423Rgk0__yO2mL-Dm1Lp",
  keys: {
    p256dh: "BPYJPTUF2wevtF0O80k1Jb1bQF9VYr+LnoCFITkyIwbNhMhUMG5qjEYxt3rNzVc1u1jSbfRuxfnvnIqBNSBj6SI=",
    auth: "snHr03qWzKV1sBJ6dRN/sQ==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "126195007564",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
