import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import colors from "../colors";

export default function LogoutDialog(props) {
    // const [open, setOpen] = React.useState(false);

    const { alertOpen, onAlertClose } = props;

    return (
        <Dialog open={alertOpen} onClose={onAlertClose}>
            <DialogTitle>Are you sure you want to log out?</DialogTitle>

            <DialogActions>
                <Button onClick={onAlertClose} color="#000">Cancel</Button>
                <Button onClick={() => { console.log("User logged out");}} sx={{background: colors.red}} variant="contained">
                    Sign Out
                </Button>
            </DialogActions>
        </Dialog>
    );
}
