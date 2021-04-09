import TextField from "@material-ui/core/TextField";


export interface TitleProps {
    handleOnChange(text: string): void
}

export default function Title({handleOnChange}: TitleProps) {
    
    return (
        <TextField
            id="new-idea-title"
            label="Title"
            required
            helperText="Hello."
            fullWidth
            margin="normal"
            variant="outlined"
        />
    );
}