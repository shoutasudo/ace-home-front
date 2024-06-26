import React from 'react';
import { StaffCollection, fetchStaffList } from "@/app/(admin)/admin/(auth)/staff/_services/api/fetchStaffList";
import { Button, Table, TableHead, TableCell, TableRow } from '@mui/material';
import Link from 'next/link';
import StaffRowsContainer from './StaffRowsContainer';
import RegisterButton from '../molecules/buttons/RegisterButton';
import PageTitle from '../atoms/PageTitle';

const StaffList: React.FC = async () => {
    let staff: StaffCollection = [];
    try {
        staff = await fetchStaffList();
    } catch (error) {
        console.log(error);
    }

    return (
        <div className='w-[90%] my-10 space-y-4 items-end'>
            <div className='w-full flex justify-end'>
                <RegisterButton />
            </div>
            <Table size="small">
                <TableHead
                    sx={{
                        backgroundColor: '#dc004e',
                        '& .MuiTableCell-root': {
                            color: '#ffffff',
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <TableRow>
                        <TableCell>作成日</TableCell>
                        <TableCell>名前</TableCell>
                        <TableCell>一言</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <StaffRowsContainer initialStaff={staff} />
            </Table>
        </div>
    );
};

export default StaffList;
