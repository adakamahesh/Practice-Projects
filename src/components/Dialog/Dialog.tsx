import * as React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DialogProps {
    open: boolean;
    title: string;
    scroll?: "paper" | "body";
    children?: React.ReactNode;  // Accepts any body content
    ConfirmText?: string;
    CancelText?: string;
    variant?: "outlined" | "contained";
    CancelColor?: "primary" | "secondary" | "error" | "success" | "warning" | "info";
    ConfirmColor?: "primary" | "secondary" | "error" | "success" | "warning" | "info";
    maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
    onConfirmAction: () => Promise<void> | void;
    onClose: () => void;
}

const Dialogs: React.FC<DialogProps> = ({
    open,
    title,
    children,
    scroll = "paper",
    ConfirmText = "Confirm",
    CancelText = "Cancel",
    variant,
    CancelColor,
    ConfirmColor,
    maxWidth,
    fullWidth = true,
    onConfirmAction,
    onClose,
}) => {
    const [loading, setLoading] = React.useState(false);

    const handleAgree = async () => {
        try {
            setLoading(true);
            await onConfirmAction();
            onClose();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} scroll={scroll} fullWidth={fullWidth} maxWidth={maxWidth} >
            <DialogTitle>{title}</DialogTitle>

            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>

            {children && (
                <DialogContent dividers={scroll === "paper"}>
                    {children}
                </DialogContent>
            )}

            <DialogActions>
                <Button onClick={onClose} disabled={loading} variant={variant} color={CancelColor}>
                    {CancelText}
                </Button>
                <Button onClick={handleAgree} disabled={loading} variant={variant} color={ConfirmColor} >
                    {loading ? "Processing..." : ConfirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Dialogs;