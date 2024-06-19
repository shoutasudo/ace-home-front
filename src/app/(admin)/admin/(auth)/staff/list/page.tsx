import createAxiosInstance from "@/lib/axiosWithToken";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Link from 'next/link';

interface Staff {
    id: number;
    name: string;
    comment: string;
    created_at: string;
}

type StaffCollection = Staff[];

//データフェッチ
const fetchStaff = async (): Promise<Staff[]> => {
    try {
        const axios = await createAxiosInstance();
        const res = await axios.get('/api/admin/staff/index');
        return res.data.data;
    } catch (error) {
        console.error('Error fetching staff:', error);
        throw new Error('Failed to fetch staff');
    }
};

// 日時フォーマット
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('ja-JP', options).format(new Date(dateString));
};

const StaffList = async () => {
    let staff: StaffCollection = [];
    try {
        staff = await fetchStaff();
        console.log(staff)
    } catch (error) {
        console.log(error)
        //どうするか考える
        return (
            <div className="w-full flex justify-center">
              <div className="w-[90%] my-20">
                <p>通信に失敗しました。時間をおいてもう一度お試しください。</p>
              </div>
            </div>
        );
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] my-20">
                {/* aタグの中にボタン配置するのほんとはだめらしいんですが一旦許してください 以下何か所かあります */}
                <Link href="/admin/staff/register">
                    <Button
                        color="secondary"
                        variant="contained"
                    >
                        新規登録
                    </Button>
                </Link>
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
                            <TableCell>名前</TableCell>
                            <TableCell>一言</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Array.isArray(staff) ? (
                        staff.map((val, index) => (
                            <TableRow
                                key={val.id}
                                sx={{
                                    backgroundColor:
                                        index % 2 === 0
                                            ? "#ffffff"
                                            : "#e8e8e8",
                                }}
                            >
                                <TableCell>{formatDate(val.created_at)}</TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.comment}</TableCell>
                                <TableCell align="right">
                                    <div className="flex justify-end">
                                        <div className="flex">
                                            <Link href={`/admin/staff/${val.id}`}>
                                                <Button variant="outlined">
                                                    詳細
                                                </Button>
                                            </Link>
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
                        ))
                    ) : (
                        <p>スタッフ情報はまだ登録されていません</p>
                    )
                    }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
export default StaffList;
