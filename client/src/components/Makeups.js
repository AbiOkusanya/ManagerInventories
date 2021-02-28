import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Makeups() {
    const [makeups, setMakeups] = useState(null);
  
    async function getMakeups() {
      try {
        const res = await axios.get("https://radiant-ocean-92179.herokuapp.com/makeups");
        setMakeups(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getMakeups();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createMakeup();
    }
  
    async function createMakeup() {
      try {
        const res = await axios.post("https://radiant-ocean-92179.herokuapp.com/makeups", form);
        setMakeups([...makeups, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedMakeup, setSelectedMakeup] = useState(null);
  
    function selectMakeup(makeup) {
      setSelectedMakeup(makeup)
    }
  
    function handleEditChange(e) {
      const { name, value } = e.target;
      setSelectedMakeup({ ...selectedMakeup, [name]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch("https://radiant-ocean-92179.herokuapp.com/makeups", selectedMakeup);
        console.log(res.data);
        getMakeups();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteMakeup(makeupId) {
      try {
        const res = await axios.delete("https://radiant-ocean-92179.herokuapp.com/makeups/" + makeupId);
        console.log(res.data);
        getMakeups();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
         
        { makeups && makeups.map(makeup=> <Makeup makeup={ makeup } selectMakeup={ selectMakeup } deleteMakeup={ deleteMakeup } />)}
  
        <div>
          <h3>Update Inventory Here</h3>
          <form
            className="log-new-inventory"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Category:
              <input type="text" name="makeupCategory"/>
            </label>
            <label>
              Brand:
              <input type="text" name="makeupBrand"/>
            </label>
            <label>
              Location:
              <input type="text" name="makeupLocation"/>
            </label>
            <label>
              Description:
              <input type="text" name="description"/>
            </label>
            <label>
              Number of Items:
              <input type="text" name="makeupNumberofItems"/>
              </label>
              <label>
              In Stock:
              <input type="text" name="makeupInStock"/>
            </label>
            <input type="submit" value="Log New Inventory" className="update" />
          </form>
  
          { selectedMakeup && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Category:
              <input type="text" name="makeupCategory" defaultValue={ selectedMakeup.makeupCategory } />
            </label>
            <label>
              Brand:
              <input type="text" name="makeupBrand" defaultValue={ selectedMakeup.makeupBrand } />
            </label>
            <label>
              Location:
              <input type="text" name="makeupLocation" defaultValue={ selectedMakeup.makeupLocation } />
            </label>
            <label>
              Description:
              <input type="text" name="description" defaultValue={ selectedMakeup.description } />
            </label>
            <label>
              Number of Items:
              <input type="integer" name="makeupNumberofItems" defaultValue={ selectedMakeup.makeupNumberofItems} />
            </label>
            <label>
              In Stock:
              <input type="boolean" name="makeupInStock" defaultValue={ selectedMakeup.makeupInStock} />
            </label>
            <input className="update" type="submit" value="Edit Inventory" />
          </form> }
        </div>
        <div className="footer">
        <footer>Created by Abisola Okusanya</footer>
      </div>
      </div>
    )
  }
  
  function Makeup({ makeup, selectMakeup, deleteMakeup }) {
    return (
        <div className="Makeupcontainer">
        <h2 className='text shadow'>Makeup Inventory</h2>

      <div className="makeup container" key={ makeup.id }>
        <h5 className="makeupCategory">{makeup.makeupCategory}</h5>
        <h5 className="makeupBrand">{makeup.makeupBrand}</h5>
        <h5 className="makeupLocation">{makeup.makeupLocation}</h5>
        <h5 className="description">{makeup.description}</h5>
        <h5 className="makeupNumberofItems">{makeup.makeupNumberofItems}</h5>
        <h5 className="makeupInStock">{makeup.makeupInStock}</h5>
        
         </div>
         
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => selectMakeup(makeup) }>Edit Makeup</button>
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => deleteMakeup(makeup.id) }>Delete Makeup</button>
      </div>
    )
  }

  export default Makeups;

  