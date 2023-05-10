import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addcustomer(props) {

    const [open, setOpen] = React.useState(false)
    const [customer, setCustomer] = React.useState({
        firstname: '', lastname: '', email: '', phone: '', address: '', postcode: '', city: ''
    });

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const addCustomer = () => {
        props.saveCustomer(customer);
        handleClose();
    }

    return(
        <div>
            <Button style={{margin: 10}} color='primary' variant='outlined' onClick={handleClickOpen}>
                New customer
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>New customer</DialogTitle>
                    <DialogContent>
                        <TextField
                        autoFocus
                        margin= 'dense'
                        name= 'firstname'
                        value= {customer.firstname}
                        onChange={event => handleInputChange(event)}
                        label= 'First name'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'lastname'
                        value= {customer.lastname}
                        onChange={event => handleInputChange(event)}
                        label= 'Last name'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'email'
                        value= {customer.email}
                        onChange={event => handleInputChange(event)}
                        label= 'Email'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'phone'
                        value= {customer.phone}
                        onChange={event => handleInputChange(event)}
                        label= 'Phone'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'streetaddress'
                        value= {customer.streetaddress}
                        onChange={event => handleInputChange(event)}
                        label= 'Address'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'postcode'
                        value= {customer.postcode}
                        onChange={event => handleInputChange(event)}
                        label= 'Postcode'
                        fullWidth
                        />
                         <TextField
                        margin= 'dense'
                        name= 'city'
                        value= {customer.city}
                        onChange={event => handleInputChange(event)}
                        label= 'City'
                        fullWidth
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={addCustomer} color='primary'>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}