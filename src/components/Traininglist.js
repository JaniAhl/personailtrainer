import React, { useEffect, useState } from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css';
import dayjs from 'dayjs';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function Traininglist() {
    const [training, setTraining] = useState([])
        
        useEffect(() => fetchData(), ([]))

        const fetchData = () => {
            fetch('https://traineeapp.azurewebsites.net/gettrainings')
            .then(response => response.json())
            .then(data => setTraining(data))
        }

        const deleteTraining = (id) => {
            if (window.confirm('Are you sure?')) {
                fetch(id, {method: 'DELETE'})
                .then(res => fetchData())
                .catch(err => console.error(err))
            }
        }

        const columns = [
            {
                sortable: false,
                filterable: false,
                width: 60,
                accessor: 'id',
                Cell: row => <Button size="small" onClick={() => deleteTraining(row.value)}><Delete /></Button>
            },

            {
                Header: 'Activity',
                accessor: 'activity'
            },

            {
                Header: 'Date',
                accessor: row => dayjs(row.date).format('YYYY-MM-DD HH:mm:ss'),
                id: 'date'
            },

            {
                Header: 'Duration (min)',
                accessor: 'duration'
            },

            {
                Header: 'Customer',
                accessor: row => `${row.customer.firstname} ${row.customer.lastname}`,
                id: 'customerName'
            },

        ]

        return (
            <div>
                <ReactTable filterable={true} data={training} columns={columns} />
            </div>
        )
}