import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Makeups() {
    const [makeup, setMakeup] = useState(null);
  
    async function getMakeup() {
      try {
        const res = await axios.get("http://localhost:8080/makeups");
        setMakeup(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getMakeup();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { category, value } = e.target;
      setForm({ ...form, [category]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createMakeup();
    }
  
    async function createMakeup() {
      try {
        const res = await axios.post("http://localhost:8080/makeups", form);
        setMakeup([...makeup, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedMakeup, setSelectedMakeup] = useState(null);
  
    function selectMakeup(makeup) {
      setSelectedMakeup(makeup)
    }
  
    function handleEditChange(e) {
      const { category, value } = e.target;
      setSelectedMakeup({ ...selectedMakeup, [category]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch("http://localhost:8080/makeups", selectedMakeup);
        console.log(res.data);
        getMakeup();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteMakeup(makeupId) {
      try {
        const res = await axios.delete("http://localhost:8080/makeups" + makeupId);
        console.log(res.data);
        getMakeup();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
         
        { makeup && makeup.map(makeup=> <Makeup makeup={ makeup } selectMakeup={ selectMakeup } deleteMakeup={ deleteMakeup } />)}
  
        <div>
          <h2>Log New Inventory</h2>
          <form
            class="log-new-inventory"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Test:
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
              <input type="integer" name="makeupNumberofItems"/>
              <label>
              In Stock:
              <input type="boolean" name="makeupInStock"/>
            </label>
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
              <input type="text" name="makeupNumberofItems" defaultValue={ selectedMakeup.hmakeupNumberofItems} />
            </label>
            <label>
              In Stock:
              <input type="text" name="makeupInStock" defaultValue={ selectedMakeup.makeupInStock} />
            </label>
            <input className="update" type="submit" value="Log New Inventory" />
          </form> }
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

  