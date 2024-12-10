import { Typography, Link, Box } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer" sx={{
            backgroundColor: "#2e2e2e",
            color: "white",
            padding: "10px 0",
            position: "relative",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            left: "50%",
            transform: "translateX(-50%)",
        }}>
            <Typography variant="body1" component="div">
                <strong>Contact</strong>
            </Typography>
            <Typography variant="body2" component="div">
                General/Registration: <Link href="mailto:contact@nzpmc.com" sx={{ color: "#b0b0b0", textDecoration: "none" }}>contact@nzpmc.com</Link>
            </Typography>
            <Typography variant="body2" component="div">
                Business/Partnership: <Link href="mailto:business@nzpmc.com" sx={{ color: "#b0b0b0", textDecoration: "none" }}>business@nzpmc.com</Link>
            </Typography>
            <Typography variant="caption" component="div" sx={{ marginTop: "10px", color: "#b0b0b0" }}>
                © 2024 Copyright: abcdf
            </Typography>
        </Box>
    );
}
