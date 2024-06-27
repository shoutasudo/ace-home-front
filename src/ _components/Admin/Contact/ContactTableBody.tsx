'use client';
import { TableBody, TableRow, TableCell, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { TableBodyProps } from '@/types/contact';
import { getContactTypeText, getStatusTypeText } from '@/app/(admin)/admin/(auth)/contact/_utils/typeToText';

const ContactTableBody = ({ setRows, rows, page, rowsPerPage }: TableBodyProps) => {
    const router = useRouter();
    
    const deleteList = async (id: number) => {
        try {
            const res = await fetch (
                process.env.NEXT_PUBLIC_FRONTEND_URL + '/api/admin/contact/delete',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id }),
                }
            );
            
            const resBody = await res.json();
            // log
            setRows(resBody);
        } catch (error) {
            console.log('response data : ', error);
        }
    };

    return (
        <TableBody>
            { rows && rows
                .slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage )
                .map(( row, index ) => (
                    <TableRow 
                        key={ row.id }
                        sx={{ backgroundColor: index % 2 === 0 ? "#fff" : "#e8e8e8", }}
                    >
                        <TableCell>
                            { new Date(row.created_at).toLocaleDateString("ja-JP") }
                        </TableCell>
                        <TableCell>{ row.name }</TableCell>
                        <TableCell>{ row.email }</TableCell>
                        <TableCell>{ getContactTypeText(row.contact_type) }</TableCell>
                        <TableCell>{ getStatusTypeText(row.status) }</TableCell>
                        <TableCell align="right">
                            <div className="flex justify-end">
                                <div className="flex">
                                    <div>
                                        <Button variant="outlined" onClick={() => router.push('/admin/contact/detail/' + row.id)}>
                                            詳細
                                        </Button>
                                    </div>
                                    <div className="ml-5">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() =>
                                                deleteList(row.id)
                                            }
                                        >
                                            削除
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
};

export default ContactTableBody;