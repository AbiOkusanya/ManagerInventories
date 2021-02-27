import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Womens() {
    const [women, setWomen] = useState(null);
  
    async function getWomen() {
      try {
        const res = await axios.get("https://radiant-ocean-92179.herokuapp.com/womens");
        setWomen(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getWomen();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
      console.log(value)
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createWomen();
    }
  
    async function createWomen() {
      try {
        const res = await axios.post("https://radiant-ocean-92179.herokuapp.com/womens", form);
        setWomen([...women, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedWomen, setSelectedWomen] = useState(null);
  
    function selectWomen(women) {
      setSelectedWomen(women)
    }
  
    function handleEditChange(e) {
      const { name, value } = e.target;
      setSelectedWomen({ ...selectedWomen, [name]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch("https://radiant-ocean-92179.herokuapp.com/womens", selectedWomen);
        console.log(res.data);
        getWomen();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteWomen (womenId) {
      try {
        const res = await axios.delete("https://radiant-ocean-92179.herokuapp.com/womens" + womenId);
        console.log(res.data);
        getWomen();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
      
        { women && women.map(women=> <Women women={ women } selectWomen={ selectWomen} deleteWomen={ deleteWomen } />)}
  
        <div>
          <h2>Log New Inventory</h2>
          <form
            class="log-new-inventory"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Category:
              <input type="text" name="WomenCategory"/>
            </label>
            <label>
              Brand:
              <input type="text" name="WomenBrand"/>
            </label>
            <label>
              Location:
              <input type="text" name="WomenLocation"/>
            </label>
            <label>
              Description:
              <input type="text" name="description"/>
            </label>
            <label>
              Number of Items:
              <input type="integer" name="WomenNumberofItems"/>
              <label>
              In Stock:
              <input type="boolean" name="WomenInStock"/>
            </label>
            </label>
            <input type="submit" value="Log New Inventory" className="update" />
          </form>
  
          { selectedWomen && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Category:
              <input type="text" name="womenCategory" defaultValue={ selectedWomen.womenCategory } />
            </label>
            <label>
              Brand:
              <input type="text" name="womenBrand" defaultValue={ selectedWomen.womenBrand } />
            </label>
            <label>
              Location:
              <input type="text" name="womenLocation" defaultValue={ selectedWomen.womenLocation } />
            </label>
            <label>
              Description:
              <input type="text" name="description" defaultValue={ selectedWomen.description } />
            </label>
            <label>
              Number of Items:
              <input type="text" name="womenNumberofItems" defaultValue={ selectedWomen.numberofItems} />
            </label>
            <label>
              In Stock:
              <input type="text" name="womenInStock" defaultValue={ selectedWomen.womenInStock} />
            </label>
            <input className="update" type="submit" value="Log New Inventory" />
          </form> }
        </div>
      </div>
    )
  }
  
  function Women({ women, selectWomen, deleteWomen }) {
    return (
        <div className="Womencontainer">
        <h2 className='text shadow'>Womens Inventory</h2>

      <div className="women container" key={ women.id }>
        <h5 className="womenCategory">{women.womenCategory}</h5>
        <h5 className="womenBrand">{women.womenBrand}</h5>
        <h5 className="womenLocation">{women.womenLocation}</h5>
        <h5 className="description">{women.description}</h5>
        <h5 className="womenNumberofItems">{women.womenNumberofItems}</h5>
        <h5 className="womenInStock">{women.womenInStock}</h5>
        
         </div>
         
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => selectWomen(women) }>Edit Women</button>
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => deleteWomen(women.id) }>Delete Women</button>
      </div>
    )
  }

  export default Womens;

  