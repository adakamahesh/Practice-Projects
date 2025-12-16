import React from "react";
import { Button, Typography } from "@mui/material";
import Dialog from "./Dialog";

const DeleteExample = () => {
    const [open, setOpen] = React.useState(false);

    const handleDelete = async () => {
        console.log("Item deleted");
    };

    return (
        <>
            <Button
                variant="contained"
                color="error"
                onClick={() => setOpen(true)}
            >
                Delete
            </Button>

            <Dialog
                open={open}
                title="Delete Item"
                ConfirmText="Delete"
                CancelText="Cancel"
                variant="contained"
                CancelColor="error"
                ConfirmColor="success"
                maxWidth='sm'
                onConfirmAction={handleDelete}
                onClose={() => setOpen(false)}
            >
                <Typography>
                    Are you sure you want to delete this item?
                </Typography>
            </Dialog>
        </>
    );
};

export default DeleteExample;
