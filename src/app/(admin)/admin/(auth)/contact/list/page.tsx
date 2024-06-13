"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";

// contact Data
function createData(
    id: number,
    date: string,
    name: string,
    tel: string,
    mail: string,
    contents: string,
) {
    return {id, date, name, tel, mail, contents};
}

const rows = [
    createData(
        0,
        "1 Jan, 2020",
        "taro",
        "09012341234",
        "sample1@sample.com",
        "お問い合わせ１"
    ),
    createData(
        1,
        "1 Jan, 2020",
        "taro",
        "09012341234",
        "sample1@sample.com",
        "お問い合わせ2"
    ),
    createData(
        2,
        "1 Jan, 2020",
        "taro",
        "09012341234",
        "sample1@sample.com",
        "お問い合わせ１"
    ),
    createData(
        3,
        "1 Jan, 2020",
        "taro",
        "09012341234",
        "sample1@sample.com",
        "お問い合わせ１"
    ),
    createData(
        4,
        "1 Jan, 2020",
        "taro",
        "09012341234",
        "sample1@sample.com",
        "お問い合わせ１"
    ),
    createData(
        5,
        "1 Jan, 2020",
        "taro",
        "09012341234",
        "sample1@sample.com",
        "お問い合わせ１"
    ),
];

const Contact = () => {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 5;
    const handleChangePage = (event: unknown, newPage:number) => {
        setPage(newPage);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] mt-20">
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
                            <TableCell>コンテンツ</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        backgroundColor:
                                            index % 2 === 0
                                                ? "#ffffff"
                                                : "#e8e8e8",
                                    }}
                                >
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.mail}</TableCell>
                                    <TableCell>{row.contents}</TableCell>
                                    <TableCell align="right">
                                        <div className="flex justify-end">
                                            <div className="flex">
                                                <div>
                                                    <Button variant="outlined">
                                                        詳細
                                                    </Button>
                                                </div>
                                                <div className="ml-5">
                                                    <Button
                                                        variant="outlined"
                                                        color="error"
                                                    >
                                                        削除
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
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
            </div>
        </div>
    );
};

export default Contact;
