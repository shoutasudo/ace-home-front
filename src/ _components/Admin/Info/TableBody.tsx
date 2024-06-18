"use client";
import MUITableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import useState from "react";

interface RowsObj {
    id: number;
    created_at: string;
    img_path: string;
    tag: string;
    title: string;
    update_at: string;
}

interface TableBodyProps {
    rows: Array<RowsObj>;
    page: number;
    rowsPerPage: number;
}

const TableBody = ({ rows, page, rowsPerPage }: TableBodyProps) => {
    const deleteList = async (id: number) => {
        try {
            const res = await fetch(
                "http://localhost:3000/api/information/register",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );
            const responseBody = await res.json();

            console.log("Response Data:", responseBody);
        } catch (error) {
            console.log("Response Data:", error);
        }
    };

    return (
        <MUITableBody>
            {rows &&
                rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                backgroundColor:
                                    index % 2 === 0 ? "#ffffff" : "#e8e8e8",
                            }}
                        >
                            <TableCell>
                                {new Date(row.created_at).toLocaleDateString(
                                    "ja-JP"
                                )}
                            </TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.tag}</TableCell>
                            {/* <TableCell>{row.paymentMethod}</TableCell> */}
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
                    ))}
        </MUITableBody>
    );
};

export default TableBody;
