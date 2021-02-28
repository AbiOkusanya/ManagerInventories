import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Mens() {
    const [mens, setMens] = useState(null);
  
    async function getMens() {
      try {
        const res = await axios.get("https://radiant-ocean-92179.herokuapp.com/mens");
        setMens(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getMens();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createMen();
    }
  
    async function createMen() {
      try {
        const res = await axios.post("https://radiant-ocean-92179.herokuapp.com/mens", form);
        setMens([...mens, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedMen, setSelectedMen] = useState(null);
  
    function selectMen(men) {
      setSelectedMen(men)
    }
  
    function handleEditChange(e) {
      const { name, value } = e.target;
      setSelectedMen({ ...selectedMen, [name]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch("https://radiant-ocean-92179.herokuapp.com/mens", selectedMen);
        console.log(res.data);
        getMens();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteMen(menId) {
      try {
        const res = await axios.delete("https://radiant-ocean-92179.herokuapp.com/mens/" + menId);
        console.log(res.data);
        getMens();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
        <h1>Testing Testing</h1>
        { mens && mens.map(men => <Men men={ men } selectMen={ selectMen} deleteMen={ deleteMen } />)}
  
        <div>
          <h2>Log New Inventory</h2>
          <form
            className="log-new-inventory"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Category:
              <input type="text" name="menCategory"/>
            </label>
            <label>
              Brand:
              <input type="text" name="menBrand"/>
            </label>
            <label>
              Location:
              <input type="text" name="menLocation"/>
            </label>
            <label>
              Description:
              <input type="text" name="description"/>
            </label>
            <label>
              Number of Items:
              <input type="integer" name="menNumberofItems"/>
              </label>
              <label>
              In Stock:
              <input type="boolean" name="menInStock"/>
            
            </label>
            <input type="submit" value="Edit Inventory" className="update" />
          </form>
  
          { selectedMen && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Category:
              <input type="text" name="menCategory" defaultValue={ selectedMen.menCategory } />
            </label>
            <label>
              Brand:
              <input type="text" name="menBrand" defaultValue={ selectedMen.menBrand } />
            </label>
            <label>
              Location:
              <input type="text" name="menLocation" defaultValue={ selectedMen.menLocation } />
            </label>
            <label>
              Description:
              <input type="text" name="description" defaultValue={ selectedMen.description } />
            </label>
            <label>
              Number of Items:
              <input type="text" name="menNumberofItems" defaultValue={ selectedMen.menNumberofItems} />
            </label>
            <label>
              In Stock:
              <input type="text" name="menInStock" defaultValue={ selectedMen.menInStock} />
            </label>
            <input className="button" type="submit" value="Log New Inventory" />
          </form> }
        </div>
      </div>
    )
  }
  
  function Men({ men, selectMen, deleteMen }) {
    return (
        <div className="Mencontainer">
        <h2 className='text shadow'>Mens Inventory</h2>

      <div className="men container" key={ men.id }>
        <h5 className="menCategory">{men.menCategory}</h5>
        <h5 className="menBrand">{men.menBrand}</h5>
        <h5 className="menLocation">{men.menLocation}</h5>
        <h5 className="description">{men.description}</h5>
        <h5 className="menNumberofItems">{men.menNumberofItems}</h5>
        <h5 className="menInStock">{men.menInStock}</h5>
        
         </div>
         
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => selectMen(men) }>Edit Men</button>
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => deleteMen(men.id) }>Delete Men</button>
      </div>
    )
  }

  export default Mens;

  