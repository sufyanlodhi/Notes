
function Inputbtn(props)
{
return(
<>
<input 
          className="border-2 border-solid rounded-md pr-4 pl-4 bg-purple-900 text-white hover:bg-purple-300 hover:text-black"

          type="button"
          value={props.name}
          onClick={() => alert(props.alert)}
        />
</>

)

}


export default Inputbtn