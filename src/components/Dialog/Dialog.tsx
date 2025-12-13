import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface AlertDialogProps {
    open: boolean;
    title: string;
    description?: string;
    agreeText?: string;
    disagreeText?: string;
    onAgreeAction: () => Promise<void> | void;
    onClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
    open,
    title,
    description,
    agreeText = 'Confirm',
    disagreeText = 'cancel',
    onAgreeAction,
    onClose,
}) => {
    const [loading, setLoading] = React.useState(false);

    const handleAgree = async () => {
        try {
            setLoading(true);
            await onAgreeAction();
            onClose();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>

            {description && (
                <DialogContent>
                    <DialogContentText>{description}</DialogContentText>
                </DialogContent>
            )}

            <DialogActions>
                <Button onClick={onClose} disabled={loading}>
                    {disagreeText}
                </Button>
                <Button
                    onClick={handleAgree}
                    autoFocus
                    disabled={loading}
                >
                    {loading ? 'Processing...' : agreeText}
                </Button>
            </DialogActions>

        </Dialog>
    );
};

export default AlertDialog;