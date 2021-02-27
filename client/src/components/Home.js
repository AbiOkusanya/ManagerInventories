import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Homes() {
    const [homes, setHomes] = useState(null);
  
    async function getHomes() {
      try {
        const res = await axios.get(" https://radiant-ocean-92179.herokuapp.com/homes");
        setHomes(res.data);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    useEffect(() => {
      getHomes();
    }, [])
  
    const [form, setForm] = useState(null);
  
    function handleChange(e) {
      const { category, value } = e.target;
      setForm({ ...form, [category]: value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      createHome();
    }
  
    async function createHome() {
      try {
        const res = await axios.post(" https://radiant-ocean-92179.herokuapp.com/homes", form);
        setHomes([...homes, res.data]);
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    const [selectedHome, setSelectedHome] = useState(null);
  
    function selectHome(home) {
      setSelectedHome(home)
    }
  
    function handleEditChange(e) {
      const { category, value } = e.target;
      setSelectedHome({ ...selectedHome, [category]: value });
    }
  
    async function handleEditSubmit(e) {
      e.preventDefault();
      try {
        const res = await axios.patch(" https://radiant-ocean-92179.herokuapp.com/homes", selectedHome);
        console.log(res.data);
        getHomes();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    async function deleteHome(homeId) {
      try {
        const res = await axios.delete(" https://radiant-ocean-92179.herokuapp.com/homes" + homeId);
        console.log(res.data);
        getHomes();
      } catch(e) {
        console.error(e, e.message);
      }
    }
  
    return(
      <div className = "container">
         
        { homes && homes.map(home=> <Home home={ home } selectHome={ selectHome } deleteHome={ deleteHome } />)}
  
        <div>
          <h2>Log New Inventory</h2>
          <form
            class="log-new-inventory"
            onChange={ (e) => handleChange(e) }
            onSubmit={ (e) => handleSubmit(e) }>
            <label>
              Category:
              <input type="text" name="homeCategory"/>
            </label>
            <label>
              Brand:
              <input type="text" name="homeBrand"/>
            </label>
            <label>
              Location:
              <input type="text" name="homeLocation"/>
            </label>
            <label>
              Description:
              <input type="text" name="description"/>
            </label>
            <label>
              Number of Items:
              <input type="integer" name="homeNumberofItems"/>
              <label>
              In Stock:
              <input type="boolean" name="homeInStock"/>
            </label>
            </label>
            <input type="submit" value="Log New Inventory" className="update" />
          </form>
  
          { selectedHome && <form
            onChange={ (e) => handleEditChange(e) }
            onSubmit={ (e) => handleEditSubmit(e) }>
            <label>
              Category:
              <input type="text" name="homeCategory" defaultValue={ selectedHome.homeCategory } />
            </label>
            <label>
              Brand:
              <input type="text" name="homeBrand" defaultValue={ selectedHome.homeBrand } />
            </label>
            <label>
              Location:
              <input type="text" name="homeLocation" defaultValue={ selectedHome.homeLocation } />
            </label>
            <label>
              Description:
              <input type="text" name="description" defaultValue={ selectedHome.description } />
            </label>
            <label>
              Number of Items:
              <input type="text" name="homeNumberofItems" defaultValue={ selectedHome.homeNumberofItems} />
            </label>
            <label>
              In Stock:
              <input type="text" name="homeInStock" defaultValue={ selectedHome.homeInStock} />
            </label>
            <input className="update" type="submit" value="Log New Inventory" />
          </form> }
        </div>
      </div>
    )
  }
  
  function Home({ home, selectHome, deleteHome }) {
    return (
        <div className="Homecontainer">
        <h2 className='text shadow'>Home Inventory</h2>

      <div className="home-container" key={ home.id }>
        <h5 className="homeCategory">{home.homeCategory}</h5>
        <h5 className="homeBrand">{home.homeBrand}</h5>
        <h5 className="homeLocation">{home.homeLocation}</h5>
        <h5 className="description">{home.description}</h5>
        <h5 className="homeNumberofItems">{home.homeNumberofItems}</h5>
        <h5 className="homehomeInStock">{home.homeInStock}</h5>
        
         </div>
         

        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => selectHome(home) }>Edit Home</button>
        <button type = "button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={ () => deleteHome(home.id) }>Delete Home</button>
      </div>
    )
  }

  export default Homes;