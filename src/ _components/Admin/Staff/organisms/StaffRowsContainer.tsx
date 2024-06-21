'use client'

import React, { useState } from 'react';
import { TableBody, TableRow, TableCell, Button } from '@mui/material';

import { formatDate } from '@/app/(admin)/admin/(auth)/staff/_services/util';
import { deleteStaff } from '@/app/(admin)/admin/(auth)/staff/_services/api/deleteStaff';

import { StaffCollection } from '@/app/(admin)/admin/(auth)/staff/_services/api/fetchStaffList';
import DetailButton from '../molecules/buttons/DetailButton';
import { useRouter } from 'next/navigation';
import DeleteDialog from './DeleteDialog';

interface StaffRowsContainerProps {
    initialStaff: StaffCollection
}

const StaffRowsContainer: React.FC<StaffRowsContainerProps> = ({ initialStaff }) => {
    const [staff, setStaff] = useState<StaffCollection>(initialStaff);
    const router = useRouter();

    const handleDelete = async (id: string) => {
        try {
            await deleteStaff(id);
            setStaff(staff.filter((s) => s.id !== id));
            console.log(`スタッフID: ${id} が削除されました`);
        } catch (error) {
            console.error(`スタッフID: ${id} の削除に失敗しました`, error);
        }
    };

    return (
        <TableBody>
            {Array.isArray(staff) ? (
                staff.map((val, index) => (
                    <TableRow
                        key={val.id}
                        sx={{
                            backgroundColor: index % 2 === 0 ? '#ffffff' : '#e8e8e8',
                        }}
                    >
                        <TableCell>{formatDate(val.created_at)}</TableCell>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.comment}</TableCell>
                        <TableCell align="right">
                            <div className="flex justify-end gap-4">
                                <DetailButton onClick={() => router.push(`/admin/staff/${val.id}`)}/>
                                <DeleteDialog handleDelete={handleDelete} id={val.id} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <p>スタッフ情報はまだ登録されていません</p>
            )}
        </TableBody>
    );
};

export default StaffRowsContainer;
