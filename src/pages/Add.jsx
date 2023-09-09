import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function Add({ backToHome }) {
    const [details, setDetails] = useState({});
    const fillDetails = (evt) => {
        setDetails(curr => {
            return { ...curr, [evt.target.name]: evt.target.value }
        })
    }
    const submitPhoto = async () => {
        const url = 'http://localhost:3000/portfolio';
        const postReq = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ details }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await postReq.text();
        if (result) {
            setDetails({});
            backToHome();
        }
    }
    return (
        <Box sx={{
            width: "400px",
            color: "white",
            border: "3px solid",
            borderColor: "#42a5f5",
            bgcolor: "dark",
            borderRadius: "10px",
        }}
            className="Add">
            <h1>Add new photo</h1>
            <div>
                <TextField
                    sx={{ mb: "20px", input: { color: "white" } }}
                    id="Title"
                    label="Title"
                    color="primary"
                    name='title'
                    onChange={fillDetails}
                    focused />
            </div>
            <div>
                <TextField
                    sx={{ mb: "20px", input: { color: "white" } }}
                    id="Url"
                    label="Image URL"
                    color="primary"
                    name='src'
                    onChange={fillDetails}
                    focused />
            </div>
            <div>
                <TextField
                    sx={{ mb: "20px", input: { color: "white" } }}
                    id="Alt"
                    label="Alt"
                    color="primary"
                    name='alt'
                    onChange={fillDetails}
                    focused />
            </div>
            <div>
                <TextField
                    sx={{ mb: "20px", input: { color: "white" } }}
                    id="Photographer"
                    label="Photographer"
                    color="primary"
                    name='photographer'
                    onChange={fillDetails}
                    focused />
            </div>
            <Button sx={{ mb: "20px" }} color="primary" variant="outlined" onClick={submitPhoto}>Submit</Button>
        </Box>
    );
}