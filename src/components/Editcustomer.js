import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Edit from '@mui/icons-material/Edit'

export default function Editcustomer(props) {

    const [open, setOpen] = React.useState(false)

    const [customer, setCustomer] = React.useState({
        firstname: '', lastname: '', email: '', phone: '', streetaddress: '', postcode: '', city: ''
    });

    const handleClickOpen = () => {
        setCustomer({firstname: props.customer.firstname, lastname: props.customer.lastname, email: props.customer.email, 
        phone: props.customer.email, streetaddress: props.customer.streetaddress, postcode: props.customer.postcode, city: props.customer.city})
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer.links[0].href);
        handleClose();
    }

    return(
        <div>
            <Button color='primary' onClick={handleClickOpen}>
                <Edit />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Edit customer</DialogTitle>
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
                    <Button onClick={updateCustomer} color='primary'>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}