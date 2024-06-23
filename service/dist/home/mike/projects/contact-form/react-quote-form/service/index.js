"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const express_1 = __importDefault(require("express"));
const resend_1 = require("resend");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const welcome_1 = require("./src/templates/welcome");
const ContactEmail_1 = __importDefault(require("./src/templates/ContactEmail"));
//
dotenv_1.default.config();
const app = (0, express_1.default)();
const resend = new resend_1.Resend(process.env.API_KEY);
app.use(express_1.default.json());
// Enable CORS for all routes
app.use((0, cors_1.default)());
app.post("/", async (req, res) => {
    const { name, email, origin, budget, project } = req.body;
    const { data, error } = await resend.emails.send({
        from: "Our awesome contact form <noreply@nightlycoding.com>",
        to: ["m.dobekidis@7linternational.com"],
        subject: "Contact info",
        react: (0, jsx_runtime_1.jsx)(ContactEmail_1.default, { name: name, email: email, origin: origin, budget: budget, project: project }),
    });
    const { data: clientData, error: clientError } = await resend.emails.send({
        from: "Our awesome contact form <noreply@nightlycoding.com>",
        to: [email],
        subject: "Welcome",
        react: (0, jsx_runtime_1.jsx)(welcome_1.WelcomeEmail, { name: name }),
    });
    if (error) {
        return res.status(400).json({ error });
    }
    res.status(200).json({ data });
});
app.listen(3002, () => {
    console.log("Listening on http://localhost:3002");
});
//# sourceMappingURL=index.js.map