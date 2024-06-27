"use client";
import { useState, useEffect, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Table, TableCell, TableHead, TableRow, TablePagination, Button } from '@mui/material/';
import ContactTableBody from "@/ _components/Admin/Contact/ContactTableBody";

const Contact = () => {
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState<any[]>([]);
    const rowsPerPage = 5;
    const router = useRouter();
    const getList = async () => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/contact/list");
            const resBody = await res.json();
            setRows(resBody);
        } catch (error) {
            console.error("Response Data : ", error);
        }
    };
    useEffect(() => {
        getList();
    }, []);
    const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage:number) => {
        setPage(newPage);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] my-20">
                <Table size="small">
                    <TableHead
                        sx={{
                            backgroundColor: "#dc004e",
                            "& .MuiTableCell-root": {
                                color: "#ffffff",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        <TableRow>
                            <TableCell>受信日</TableCell>
                            <TableCell>送信者</TableCell>
                            <TableCell>メールアドレス</TableCell>
                            <TableCell>問い合わせ内容</TableCell>
                            <TableCell>状態</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length !== 0 &&
                        <ContactTableBody setRows={setRows} rows={rows} page={page} rowsPerPage={rowsPerPage} />
                    }
                </Table>
                {rows.length !== 0 && (
                    <TablePagination
                        rowsPerPageOptions={[]} // オプションを空にする
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        labelRowsPerPage="" // ラベルを空にする
                        sx={{
                            "& .MuiTablePagination-toolbar": {
                                display: "flex",
                                justifyContent: "flex-end",
                            },
                            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-input":
                                {
                                    display: "none", // Rows per page を非表示にする
                                },
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Contact;
