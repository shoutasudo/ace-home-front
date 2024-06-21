'use client'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteButton from '../molecules/buttons/DeleteButton';
import React, { useState } from 'react';

interface Props {
    id: string;
    handleDelete: (id: string) => Promise<void>;
}

const DeleteDialog: React.FC<Props> = ({ handleDelete, id }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAgree = async () => {
        await handleDelete(id);
        setOpen(false);
    };

    return (
        <React.Fragment>
            <DeleteButton onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"削除確認"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        本当に削除してもよろしいですか?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>いいえ</Button>
                    <Button onClick={handleAgree} autoFocus>
                        はい
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DeleteDialog;
