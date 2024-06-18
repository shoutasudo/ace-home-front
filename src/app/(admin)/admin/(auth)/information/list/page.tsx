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

const Information = () => {
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState<any[]>([]);
    const getList = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/information/list");
            const responseBody = await res.json();
            setRows(responseBody)
            console.log("Response Data:", responseBody);
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
                    <TableBody rows={rows} page={page} rowsPerPage={rowsPerPage} />
                </Table>
                {rows && (
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
