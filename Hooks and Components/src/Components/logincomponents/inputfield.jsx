function Inputfields(props){

return(

    <>
     <label className="lbpass" htmlFor="password">{props.lbname}</label>
        <input
          className="border-2 border-solid border-cyan-600 rounded-md pr-4 pl-4"
          type="password"
          name="password"
          id="password"
          placeholder={props.placeholder}
        />
    </>
)

}

export default Inputfields