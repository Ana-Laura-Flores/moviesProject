import { Box } from "@mui/material";
import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
export default function Footer() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "5px",
                paddingTop: "10px",
                height: "auto",
                alignItems: "center",
                backgroundColor: "#1e1e1e",
                color: "whiteSmoke",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    margin: "3px",
                    listStyle: "none",
                    marginTop: "20px",
                    fontSize: "1.5rem",
                }}
            >
                <li style={{ padding: "5px" }}>
                    <a
                        href="https://github.com/Ana-Laura-Flores"
                        target="blank"
                        style={{ textDecoration: "none", color: "whiteSmoke" }}
                    >
                        <FaGithubAlt />
                    </a>
                </li>
                <li style={{ padding: "5px" }}>
                    <a
                        href="https://www.linkedin.com/in/kreardisenio/"
                        target="blank"
                        style={{ textDecoration: "none", color: "whiteSmoke" }}
                    >
                        <FaLinkedinIn />{" "}
                    </a>
                </li>
                <li style={{ padding: "5px" }}>
                    <a
                        href="mailto:anadisenio@hotmail.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "whiteSmoke" }}
                    >
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "3px",
                }}
            >
                <p style={{ margin: "0  5px" }}>Hecho con </p>
                <p>❤️</p>
                <p style={{ margin: "0  5px" }}> por Ana Laura Flores</p>
            </div>
        </Box>
    );
}
