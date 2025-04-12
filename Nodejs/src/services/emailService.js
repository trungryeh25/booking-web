import nodemailer from "nodemailer";

require("dotenv").config();

let sendASimple = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  let infor = await transporter.sendMail({
    from: '"trgn312" <trungnt48376@gm.com>',
    to: dataSend.receiveEmail,
    subject: "Thông tin đặt lịch khám răng đối thủ",
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
        <h3>Xin chào ${dataSend.patientName}</h3>
        <p>Bạn đã đặt lịch thành công trên TRGN312.bookingcare. <br>
        Thông tin lịch khám: <br>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div> <br>
        Xác nhận thông tin, sau đó nhấn vào đường dẫn để hoàn tất thủ tục đặt lịch. <br>
        Link: <a href=${dataSend.redirectLink} target="_blank">Nhấn tại đây</a>. <br>
        Xin chân thành cảm ơn.  
        </p>
    `;
  }
  if (dataSend.language === "en") {
    result = `
        <h3>Dear ${dataSend.patientName}</h3>
        <p>You have successfully booked an appointment on TRGN312.bookingcare. <br>
        Appointment details: <br>
        <div><b>Time: ${dataSend.time}</b></div>
        <div><b>Doctor: ${dataSend.doctorName}</b></div> <br>
        Please confirm the information, then click on the link to complete the booking process. <br>
        Link: <a href=${dataSend.redirectLink} target="_blank">Click here</a>. <br>
        Thank you very much.
        </p>
    `;
  }
  return result;
};

let sendAttachment = async (dataSend) => {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_APP,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      let infor = await transporter.sendMail({
        from: '"trgn312" <trungnt48376@gm.com>',
        to: dataSend.email,
        subject: "Kết quả đặt lịch khám bệnh",
        html: getBodyHTMLEmailRemedy(dataSend),
        attachments: [
          {
            // encoded string as an attachment
            filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.jpg`,
            content: dataSend.imgBase64.split("base64,")[1],
            encoding: "base64",
          },
        ],
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let getBodyHTMLEmailRemedy = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
        <h3>Xin chào ${dataSend.patientName}</h3>
        <p>Bạn đã đặt lịch thành công trên TRGN312.bookingcare. <br>
        Thông tin đơn thuốc/hóa đơn được gửi trong tệp đính kèm. <br>
        Xin chân thành cảm ơn.  
        </p>
    `;
  }
  if (dataSend.language === "en") {
    result = `
        <h3>Dear ${dataSend.patientName}</h3>
        <p>You have successfully booked an appointment on TRGN312.bookingcare. <br>
            The prescription/invoice details are included in the attached file. <br>
            Thank you very much.  
        </p>

    `;
  }
  return result;
};

module.exports = {
  sendASimple: sendASimple,
  sendAttachment: sendAttachment,
};
