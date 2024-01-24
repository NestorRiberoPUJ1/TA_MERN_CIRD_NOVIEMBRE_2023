'use client'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const PlayerListPage = () => {

    const [players, setPlayers] = useState([]);

    const getPlayers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/player");
            const result = await response.data;
            console.log(result);
            setPlayers(result);
        } catch (error) {
            console.log(error);
        }
    };
    const deletePlayer = async (player) => {
        const confirmeDelete = confirm(`Está a punto de elminar al jugador ${player.name}`);
        if (confirmeDelete) {
            try {
                const response = await axios.delete(`http://localhost:8000/api/player/${player._id}`);
                const result = await response.data;
                console.log(result);
                setPlayers((prevValue) => {
                    const filtered = prevValue.filter((item) => item._id !== player._id);
                    return ([...filtered]);
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        getPlayers();
    }, [])


    return (
        <main>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Player Name</TableCell>
                            <TableCell align="left">Preferred Position</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            players.map((item, idx) => {
                                return (
                                    <TableRow key={idx}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.position}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => deletePlayer(item)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    )
};

export default PlayerListPage;