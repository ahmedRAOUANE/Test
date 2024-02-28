import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";


export default function FullScreenLoader() {
    const isLoading = useSelector(state => state.loaderSlice.isLoading);
    return (
        <div>
            <Backdrop
                sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1, background: 'white' }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}