import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Mens() {
    const [men, setMen] = useState(null);
  
    async function getMen() {
      try {
        const res = await axios.get('http://localhost:8080/mens');
        setMen(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getMen();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { category, value } = e.target;
      setForm({ ...form, [category]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createMen();
    }
  
    async function createMen() {
      try {
        const res = await axios.post('http://localhost:8080/mens', form);
        setMen([...men, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedMen, setSelectedMen] = useState(null);
  
    function selectMen(men) {
      setSelectedMen(men)
    }
  
    function handleEditChange(e) {
      const { category, value } = e.target;
      setSelectedMen({ ...selectedMen, [category]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch('http://localhost:8080/mens', selectedMen);
        console.log(res.data);
        getMen();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteMen (menId) {
      try {
        const res = await axios.delete('http://localhost:8080/mens' + menId);
        console.log(res.data);
        getMen();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
        
        { men && men.map(men=> <Men men={ men } selectMen={ selectMen} deleteMen={ deleteMen } />)}
  
        <div>
          <h2>Log New Inventory</h2>
          <form
            class="log-new-inventory"
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
              <label>
              In Stock:
              <input type="boolean" name="menInStock"/>
            </label>
            </label>
            <input type="submit" value="Log New Inventory" className="update" />
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
              <input type="text" name="menNumberofItems" defaultValue={ selectedMen.menpNumberofItems} />
            </label>
            <label>
              In Stock:
              <input type="text" name="menInStock" defaultValue={ selectedMen.menInStock} />
            </label>
            <input className="update" type="submit" value="Log New Inventory" />
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

  