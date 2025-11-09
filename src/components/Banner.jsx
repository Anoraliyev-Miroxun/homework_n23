import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import rug1 from '../assets/rug1.png'
import rug2 from '../assets/rug2.png'


export default function Banner() {
    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                borderRadius: 3,
                color: "white",
                p: 5,
                mt: 3,
            }}
        >
            <Container maxWidth="lg" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb={2} width={"400px"}>
                        Новая коллекция ковров Venetta
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Смотреть все
                    </Button>
                </Box>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <img src={rug1} width="300" alt="rug1" />
                    <img src={rug2} width="300" alt="rug2" />
                </Box>
            </Container>
        </Box >
    );
}
