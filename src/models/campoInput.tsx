import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface IProps{
    type:string;
    label:string;
    value:number|string;
    onChangeInput:(val:any)=>void;
}

function CampoInput({type,label,value,onChangeInput}:IProps){

    const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        onChangeInput(event.target.value);
    };

    return(
        <div>
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" type={type} value={value} onChange={onChange} />
      
    </Box>
    </div>
           
    )
}

export default CampoInput;