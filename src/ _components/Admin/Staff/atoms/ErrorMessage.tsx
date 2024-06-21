import { Typography } from "@mui/material"

interface ErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <Typography color="error" variant="body2">
            { message }
        </Typography>
    );
}

export default ErrorMessage;
