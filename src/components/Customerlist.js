import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css';
import Delete from '@mui/icons-material/Delete'
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

export default function Customerlist() {

    const [customers, setCustomers] = useState([])

    useEffect(() => fetchData(), ([]))

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const saveCustomer = (customer) => {
        fetch('https://traineeapp.azurewebsites.net/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
    

    const columns = [
        {
            sortable: false,
            filterable: false,
            width: 50,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
        },

        {
            sortable: false,
            filterable: false,
            width: 60,
            accessor: 'links[0].href',
            Cell: row => <Button size="small" onClick={() => deleteCustomer(row.value)}><Delete /></Button>
        },

        {
            Header: 'Firstname',
            accessor: 'firstname'
        },

        {
            Header: 'Lastname',
            accessor: 'lastname'
        },

        {
            Header: 'Email',
            accessor: 'email'
        },

        {
            Header: 'Phone',
            accessor: 'phone'
        },

        {
            Header: 'Address',
            accessor: 'streetaddress'
        },

        {
            Header: 'Postcode',
            accessor: 'postcode'
        },

        {
            Header: 'City',
            accessor: 'city'
        },
    ]

    return (
        <div>
             <Addcustomer saveCustomer={saveCustomer} />
            <ReactTable filterable={true} data={customers} columns={columns} />
        </div>
    )
}