import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'cloud@bts-malraux.net',
        pass: 'Jungle$314'
    }
});

export async function sendEmail(to, subject, text) {
    await transporter.sendMail({
        from: 'cloud@bts-malraux.net',
        to,
        subject,
        text
    })
};