import {
    Body,
    Container,
    Head,
    Html,
    Row,
    Section,
    Text
} from "@react-email/components";
import React from "react";

interface ContactEmailProps {
    name: string;
    email: string;
    budget: string;
    project: string;
    origin: string;
}

const TITLES = ['Web Development', 'Mobile App', 'Design', 'Marketing'];
const BUDGETS = ['$1000-$5000', '$5000-$10000', '$10000+'];

const ContactEmail = ({ name, origin, project, budget, email }: { name: string; origin: string; project: string; budget: string; email: string; }) => {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: 'sans-serif' }}>
                <Container>
                    <Section style={styles.section}>
                        <Row>
                            <Text style={styles.h3}>Hi, my name is </Text>
                            <Text style={styles.h2}>{name}</Text>
                            <Text style={styles.h3}> and I'm from </Text>
                            <Text style={styles.h2}>{origin}</Text>
                            <Text style={styles.h2}>.</Text>
                        </Row>

                        <Row>
                            <Text style={styles.h3}>I'm interested in </Text>

                            <Text style={styles.h2}>
                                {project}
                            </Text>

                            <Text style={styles.h2}>.</Text>
                        </Row>

                        <Row>
                            <Text style={styles.h3}>My budget for this project is: </Text>
                            <Text style={styles.h2}>{budget}</Text>
                            <Text style={styles.h2}>.</Text>
                        </Row>

                        <Row>
                            <Text style={styles.h3}>You can contact me via e-mail </Text>
                            <Text style={styles.h2}>{email}</Text>
                            <Text style={styles.h2}>.</Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactEmail;

const styles = {
    section: {
        display: 'flex',
        gap: '8px 6px',
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
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
        whiteSpace: 'nowrap' as const,
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