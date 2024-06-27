export interface RowsObj {
    id: number;
    contact_type: contactType;
    name: string;
    company_name: string;
    tel_number: string;
    email: string;
    content: string;
    status: statusType;
    created_at: string;
};

export enum contactType {
    ABOUT = 1,
    PROPERTY = 2,
    REFORM = 3,
    BUYSELL = 4,
    JOB = 5,
    OTHER = 6,
};

export const contactTypeMapping: { [key in contactType]: string } = {
    [contactType.ABOUT]: "ACE HOMEについて",
    [contactType.PROPERTY]: "物件について",
    [contactType.REFORM]: "リフォームについて",
    [contactType.BUYSELL]: "売買について",
    [contactType.JOB]: "求人について",
    [contactType.OTHER]: "その他について",
};

export enum statusType {
    NO = 0,
    YES = 1,
};

export const statusTypeMapping: { [key in statusType]: string } = {
    [statusType.NO]: "未読",
    [statusType.YES]: "既読",
}

export interface TableBodyProps {
    setRows: React.Dispatch<React.SetStateAction<Array<RowsObj>>>;
    rows: Array<RowsObj>;
    page: number;
    rowsPerPage: number;
};
