import { useContext, useState } from "react"
import { FormContext } from "../Context/FormContext"

export const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
  }

  const {handleSubmit} = useContext(FormContext);

  return (
    <>
      <h2>Form</h2>
      <div>
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/><br /><br />
        <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button disabled={!Name || !Email || !Password} onClick={() => {
          handleSubmit(Name, Email, Password);
        }}>Submit</button>
      </div>
    </>
  )
}