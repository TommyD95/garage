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
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default CampoInput;