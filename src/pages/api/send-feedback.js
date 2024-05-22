export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Новое сообщение с формы FeedbackForm',
            text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ошибка при отправке письма.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Метод ${req.method} не разрешен`);
    }
}
