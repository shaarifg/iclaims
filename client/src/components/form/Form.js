import { useState } from 'react'
import './form.css'

const Form = () => {
    const [placeholder, setPlaceholder] = useState('Name')

    const handleChange = (e) =>{
        setPlaceholder(e.target.value)
    }
  return (
    <div id='form'>
    <form action="" className="filter_form">
          <label htmlFor="select_value">Search By:
          <select name="type" id="select_value" onChange={handleChange}>
          <option value="Name">Name</option>
          <option value="Policy Id">Policy Id</option>
          <option value="Hospital Name">Hospital Name</option>
          </select>
          </label>
          <div className="input_btn">
          <input type="text" placeholder={`Enter ${placeholder}`} />
          <button className="search_btn">Search</button>
          </div>
        </form>
    </div>
  )
}

export default Form