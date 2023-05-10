import { Drawer, Box, Typography, IconButton, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import AccountBox from '@mui/icons-material/AccountBox'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import DirectionsRun from '@mui/icons-material/DirectionsRun'
import './Stylesheet.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



export const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    }

    return (
        <>
            <IconButton
                size='small'
                edge='start'
                color='inherit'
                aria-label='logo'
                sx={{ marginLeft: '-12px' }}
                onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box display='flex' justifyContent='flex-end'>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>
                <Divider />
                <Box p={2} width='250px' textAlign='left' role='presentation'>
                    <Typography  variant='h6'>
                        <Link to='/' className='nav-link' onClick={handleDrawerClose}>
                            <AccountBox className='nav-icon' />
                            <span className='nav-text'>Customers</span>
                        </Link>
                    </Typography>
                    <Typography variant='h6'>
                        <Link to='/Traininglist' className='nav-link' onClick={handleDrawerClose}>
                            <DirectionsRun className='nav-icon' />
                            <span className='nav-text'>Trainings</span>
                        </Link>
                    </Typography>
                    <Typography variant='h6'>
                        <Link to='/calendar' className='nav-link' onClick={handleDrawerClose}>
                            <CalendarMonth className='nav-icon' />
                            <span className='nav-text'>Calendar</span>
                        </Link>
                    </Typography>
                </Box>
            </Drawer>

        </>
    )
    
}

