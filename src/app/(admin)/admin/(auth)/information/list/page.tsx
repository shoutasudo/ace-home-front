"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { useState, useEffect } from "react";
import TableBody from "../../../../../../ _components/Admin/Info/TableBody";
import { MouseEvent } from 'react';
import { RegisterButton } from "@/ _components/Admin/Info/RegisterButton";

const Information = () => {
    const [page, setPage] = useState(0);
    const [rows, setRows] = useState<any[] | null>(null);

    const getList = async () => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/admin/information/list", {
                cache: 'no-store', // キャッシュを無効化するオプションを追加
            });
            let responseBody = null
            if(res.status == 200) {
                responseBody = await res.json();
            }
            setRows(responseBody);
        } catch (error) {
            console.log("Response Data:", error);
            setRows(null); // エラー時には空の配列を設定
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
            <div className="w-[90%] my-10">
                <RegisterButton />
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
                    <TableBody setRows={setRows} rows={rows} page={page} rowsPerPage={rowsPerPage} />
                </Table>
                {(rows !== null && rows !== undefined && rows.length !== 0) && (
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
