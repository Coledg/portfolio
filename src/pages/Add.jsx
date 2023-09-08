import { useState } from "react";
import { Button, TextField } from "@mui/material";

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
        <div className="Add">
            <h1>Add new photo</h1>
            <div>
                <TextField label="Title" color="primary" name='title' onChange={fillDetails} focused />
            </div>
            <div>
                <TextField label="Image Url" color="primary" name='src' onChange={fillDetails} focused />
            </div>
            <div>
                <TextField label="Alt" color="primary" name='alt' onChange={fillDetails} focused />
            </div>
            <div>
                <TextField label="Owner" color="primary" name='owner' onChange={fillDetails} focused />
            </div>
            <Button variant="outlined" onClick={submitPhoto}>Submit</Button>
        </div>
    );
}