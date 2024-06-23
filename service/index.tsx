import express, { Request, Response } from "express";
import { Resend } from "resend";
import dotenv from 'dotenv';
import cors from "cors"
import { WelcomeEmail } from "./src/templates/welcome";
import ContactEmail from "./src/templates/ContactEmail";
import React from "react";

//

dotenv.config();

const app = express();
const resend = new Resend(process.env.API_KEY);

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

app.post("/", async (req: Request, res: Response) => {
    const { name, email, origin, budget, project } = req.body;
    const { data, error } = await resend.emails.send({
        from: "Our awesome contact form <noreply@nightlycoding.com>",
        to: ["m.dobekidis@7linternational.com"],
        subject: "Contact info",
        react: <ContactEmail name={name} email={email} origin={origin} budget={budget} project={project} />,
    });
    const { data: clientData, error: clientError } = await resend.emails.send({
        from: "Our awesome contact form <noreply@nightlycoding.com>",
        to: [email],
        subject: "Welcome",
        react: <WelcomeEmail name={name} />,
    });

    if (error) {
        return res.status(400).json({ error });
    }

    res.status(200).json({ data });
});

app.listen(3002, () => {
    console.log("Listening on http://localhost:3002");
});