import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";


const PlayersTemplate = ({ children }) => {

    return (
        <Container maxWidth="xl" >
            <Box sx={{ margin: 0, padding: 0, display: "flex", mb: 4 }}>
                <Typography variant="h5" sx={{ marginRight: 2 }}>
                    <Link href="/players/list">List</Link>
                </Typography>
                <Typography variant="h5">
                    <Link href="/players/addplayer">Add Player</Link>
                </Typography>
            </Box>
            {children}
        </Container>
    )

};

export default PlayersTemplate;