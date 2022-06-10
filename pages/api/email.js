import nodemailer from 'nodemailer'

export default async function handler(req, res) {

    if(req.method == "POST") {
        let {name, email, title, messages} = req.body
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        await transport.sendMail( {
            from: email,
            to: "alexngun7@gmail.com",
            subject: title,
            html: `<div style="
                border: 1px solid black;
                padding: 20px;
                font-family: sans-serif;
                line-height: 2;
                font-size: 20px;
                ">
                    <h2>Here is your email from ${name}</h2>
                    <p>${messages}</p>
                </div>`
        })

        return res.status(200).send("you are good to go")
    }

    return res.status(400).send("Only POST request are allowed")
}