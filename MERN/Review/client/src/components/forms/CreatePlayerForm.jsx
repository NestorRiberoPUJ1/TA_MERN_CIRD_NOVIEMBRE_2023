'use client'
import axios from "axios";
import { useState } from "react";

const { Typography, TextField, Stack, Box, Button } = require("@mui/material")



const CreatePlayerForm = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const handleCreatePlayer = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name,
                position
            }
            const response = await axios.post("http://localhost:8000/api/player", data);
            const result = await response.data;
            console.log(result);
            setName("");
            setPosition("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box sx={{ border: "2px solid black", padding: 4 }}>
            <form onSubmit={handleCreatePlayer}>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h6" component="label" sx={{ minWidth: "fit-content" }}>Player Name:</Typography>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            helperText={name.length < 2 ? "Name must be at least 2 characters in length" : ""}
                            error={name.length < 2}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="h6" component="label" sx={{ minWidth: "fit-content" }}>Preferred Position:</Typography>
                        <TextField
                            type="text"
                            size="small"
                            fullWidth
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </Stack>
                    <Stack>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ width: "fit-content" }}
                            disabled={name.length < 2}
                        >
                            Create
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    )
}

export default CreatePlayerForm;