const qrImage = require("qr-image");

const qrGenerate = url => {
  return qrImage.imageSync(url, {
    type: "svg",
    size: 10,
    margin: 2
  });
};
module.exports = { qrGenerate };
