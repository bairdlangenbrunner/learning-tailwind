import { useState } from "react"

export function NewTodoForm(props) {

  const [newItem, setNewItem] = useState("") // destructuring useState

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem==="") {
      alert('Add a value')
      return
    }
    props.addTodoProp(newItem)
    setNewItem("")
  }
  return(
  <form 
  onSubmit={handleSubmit}
  className="new-item-form">
  <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item" />
  </div>
  <button className="btn">Add</button>
  </form>)
}