export default function ImagePicker({label,name}){
    return(
        <>
            <input type="file" accept="image/png,image/jpeg" name={name}/>
        </>
    )
}