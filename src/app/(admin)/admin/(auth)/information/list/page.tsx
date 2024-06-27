"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import TableBody from "../../../../../../ _components/Admin/Info/TableBody";
import { MouseEvent } from 'react';
import { useRouter } from "next/navigation";

const Information = () => {
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState<any[]>([]);
    const router = useRouter();
    const getList = async () => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/list");
            const responseBody = await res.json();
            setRows(responseBody)
        } catch (error) {
            console.log("Response Data:", error);
        }
    };
    useEffect(() => {
        getList();
    }, []);
    const rowsPerPage = 5;

    const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };


    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] my-20">
                <div className="w-full flex justify-end mb-5" >
                    <Button variant="outlined" onClick={() => router.push('/admin/information/register')}>新規登録</Button>
                </div>
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
                            <TableCell>作成日</TableCell>
                            <TableCell>タイトル</TableCell>
                            <TableCell>タグ</TableCell>
                            {/* <TableCell>内容</TableCell> */}
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length !== 0 &&
                        <TableBody setRows={setRows} rows={rows} page={page} rowsPerPage={rowsPerPage} />

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
                                justifyContent: "flex-end", // ページネーションコントロールの位置調整
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

export default Information;
