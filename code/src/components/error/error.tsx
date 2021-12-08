import { Typography } from "@mui/material";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorHandler extends Component<Props, State> {
    
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(_: Error) : State{
        // If an error occurs, update the hasError state to render the error ui.
        return {hasError: true}
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.error("Error: ", error, errorInfo);
    }

    public render(){
        if(this.state.hasError){
            return <Typography variant="h1">Errorpage</Typography>
        }
        return this.props.children;
    }
}