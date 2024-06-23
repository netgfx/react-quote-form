"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const WelcomeEmail = ({ name, }) => ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsx)(components_1.Preview, { children: "Glad to make your acquaintance" }), (0, jsx_runtime_1.jsx)(components_1.Body, { style: main, children: (0, jsx_runtime_1.jsxs)(components_1.Container, { style: container, children: [(0, jsx_runtime_1.jsx)(components_1.Heading, { style: h1, children: "You will hear from us soon" }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: text, children: ["Thank you ", name, " for contacting us. We will send you a note when we have something new to share."] })] }) })] }));
exports.WelcomeEmail = WelcomeEmail;
exports.default = exports.WelcomeEmail;
const main = {
    backgroundColor: "#000000",
    margin: "0 auto",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};
const container = {
    margin: "auto",
    padding: "96px 20px 64px",
};
const h1 = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "40px",
    margin: "0 0 20px",
};
const text = {
    color: "#aaaaaa",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 0 40px",
};
//# sourceMappingURL=welcome.js.map