import React,{useState} from 'react'

export const App = () => {
  

const[formValues,setFromValues] = useState({
  userName: "",
  Email: "",
  Password: ""
});

const submit=(event)=> {
  setFromValues({
  userName: "",
  Email: "",
  Password: ""
  });
  console.log(formValues)
  event.preventDefault();
}
const handleChange=(e)=>{
  const{name,value} = e.target;

  setFromValues((prev)=>{
    return{
      ...prev,
      [name]:value
    };
  });
}
  return (
    <div className="max-width">
    <form  className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <input onChange={handleChange} name="userName" value={formValues.userName} type="username" id="inputUserName" className="form-control" placeholder="UserName" required autoFocus />
      <input onChange={handleChange} name="Email" value={formValues.Email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required  />
      <input onChange={handleChange} name="Password" value={formValues.Password} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <input onClick={submit} className='mid' type="submit" value="Submit"/>
    </form>
    </div> 
  )
}
export default App;