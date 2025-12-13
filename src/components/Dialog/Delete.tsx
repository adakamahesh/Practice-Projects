import React from "react";
import { Button } from "@mui/material";
import AlertDialog from "./Dialog";

const DeleteExample = () => {
  const [open, setOpen] = React.useState(false);

  const handleDelete = async () => {
    // your logic (API / state update)
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

      <AlertDialog
        open={open}
        title="Delete Item"
        description="Are you sure you want to delete this item?"
        agreeText="Delete"
        disagreeText="Cancel"
        onAgreeAction={handleDelete}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default DeleteExample;
