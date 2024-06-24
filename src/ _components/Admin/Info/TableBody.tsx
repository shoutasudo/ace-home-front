"use client";
import MUITableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';

interface RowsObj {
    uuid: string;
    created_at: string;
    img_path: string;
    tag: string;
    title: string;
    update_at: string;
}

interface TableBodyProps {
    setRows: React.Dispatch<React.SetStateAction<Array<RowsObj>>>;
    rows: Array<RowsObj>;
    page: number;
    rowsPerPage: number;
}

const TableBody = ({setRows, rows, page, rowsPerPage }: TableBodyProps) => {
    const router = useRouter();

    const deleteList = async (uuid: string) => {
        try {
            const res = await fetch(
                process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/information/delete",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ uuid: uuid }),
                }
            );
            const responseBody = await res.json();
            setRows(responseBody);

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
                            key={row.uuid}
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
                                            <Button variant="outlined" onClick={() => router.push('/admin/information/edit/' + row.uuid)}>
                                                詳細
                                            </Button>
                                        </div>
                                        <div className="ml-5">
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                onClick={() =>
                                                    deleteList(row.uuid)
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