import Button from '@mui/material/Button';
import SendIcon from '@mui/material/IconButton';
import DeleteIcon from '@mui/material/IconButton';

interface IProps{
    type:string;
    onClick:()=>void;
    label:string;
}
function Pulsante({onClick,type,label}:IProps){

    return(
        
            <Button size='small' variant="contained" endIcon={label=="inserisci" ? <SendIcon /> : <DeleteIcon />} type="button"  onClick={onClick}>
            {label}
</Button>
            
        
    )
}

export default Pulsante;