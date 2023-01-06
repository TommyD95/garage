interface IProps{
    type:string;
    onClick:()=>any;
    label:string;
}
function Pulsante({onClick,type,label}:IProps){

    return(
        <div>
            <button type="button" onClick={onClick}>{label}</button>
        </div>
    )
}

export default Pulsante;