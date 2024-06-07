"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { Button } from "@mui/material";

// Generate Order Data
function createData(
    id: number,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: number
) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(
        0,
        "16 Mar, 2019",
        "Elvis Presley",
        "Tupelo, MS",
        "VISA ⠀•••• 3719",
        312.44
    ),
    createData(
        1,
        "16 Mar, 2019",
        "Paul McCartney",
        "London, UK",
        "VISA ⠀•••• 2574",
        866.99
    ),
    createData(
        2,
        "16 Mar, 2019",
        "Tom Scholz",
        "Boston, MA",
        "MC ⠀•••• 1253",
        100.81
    ),
    createData(
        3,
        "16 Mar, 2019",
        "Michael Jackson",
        "Gary, IN",
        "AMEX ⠀•••• 2000",
        654.39
    ),
    createData(
        4,
        "15 Mar, 2019",
        "Bruce Springsteen",
        "Long Branch, NJ",
        "VISA ⠀•••• 5919",
        212.79
    ),
    createData(
        5,
        "15 Mar, 2019",
        "Bruce Springsteen",
        "Long Branch, NJ",
        "VISA ⠀•••• 5919",
        212.79
    ),
    createData(
        6,
        "15 Mar, 2019",
        "Bruce Springsteen",
        "Long Branch, NJ",
        "VISA ⠀•••• 5919",
        212.79
    ),
    // Add more rows as needed
];

const Information = () => {
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 5;

    const handleChangePage = (event: unknown, newPage: number) => {
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
                            <TableCell>内容</TableCell>
                            <TableCell>タグ</TableCell>
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
                                    <TableCell>{row.shipTo}</TableCell>
                                    <TableCell>{row.paymentMethod}</TableCell>
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

export default Information;
