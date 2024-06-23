"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const TITLES = ['Web Development', 'Mobile App', 'Design', 'Marketing'];
const BUDGETS = ['$1000-$5000', '$5000-$10000', '$10000+'];
const ContactEmail = ({ name, origin, project, budget, email }) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsx)(components_1.Body, { style: { fontFamily: 'sans-serif' }, children: (0, jsx_runtime_1.jsx)(components_1.Container, { children: (0, jsx_runtime_1.jsxs)(components_1.Section, { style: styles.section, children: [(0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h3, children: "Hi, my name is " }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: name }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h3, children: " and I'm from " }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: origin }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: "." })] }), (0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h3, children: "I'm interested in " }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: project }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: "." })] }), (0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h3, children: "My budget for this project is: " }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: budget }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: "." })] }), (0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h3, children: "You can contact me via e-mail " }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: email }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.h2, children: "." })] })] }) }) })] }));
};
exports.default = ContactEmail;
const styles = {
    section: {
        display: 'flex',
        gap: '8px 6px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '2px solid black',
        padding: '20px',
        margin: '0px',
        background: '#f1f1f1',
        justifyContent: 'start',
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        alignContent: 'center',
        maxWidth: '700px',
    },
    h3: {
        display: 'inline-flex',
        fontSize: '16px',
        fontWeight: '400',
        color: '#939599',
        margin: '0',
        marginRight: "8px",
        marginLeft: "8px",
        paddingBottom: "4px",
    },
    h2: {
        display: 'contents',
        fontSize: '20px',
        fontWeight: '400',
        color: '#000',
        width: 'auto',
        marginRight: 'auto',
        flexGrow: 3,
        flex: '1 0 100%',
        whiteSpace: 'nowrap',
    },
    pills: {
        borderRadius: '20px',
        border: '1px solid #939599',
        fontSize: '16px',
        fontWeight: '400',
        color: '#939599',
        padding: '8px 10px',
        display: 'inline-flex',
        width: 'auto',
        margin: '0',
        cursor: 'pointer',
    },
    input: {
        WebkitAppearance: 'none',
        width: '100%',
        border: '0',
        fontFamily: 'inherit',
        padding: '0',
        height: '30px',
        fontSize: '16px',
        fontWeight: '400',
        background: 'none',
        borderRadius: '0',
        color: '#939599',
        transition: 'all 0.15s ease',
    },
};
//# sourceMappingURL=ContactEmail.js.map