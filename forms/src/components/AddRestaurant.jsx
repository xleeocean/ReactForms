import { useState } from "react";
import { restaurants as data } from "../../../api/server/data.js";

function AddRestaurant({ updateRestaurants }) {
  const [formData, setFormData] = useState({
    id: data.length + 1,
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: ""
  });

  // update state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    updateRestaurants(formData);
    setFormData({
      name: "",
      address: "",
      phone: "",
      cuisine: "",
      rating: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" required
        value = {formData.name}  onChange={handleChange}/>
      </div>

      <div>
        <label>image:</label>
        <input type="text" name="image"/>
      </div>

      <div>
        <label>Address:</label>
        <input type="text" name="address" required
        value = {formData.address}  onChange={handleChange}/>
      </div>

      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" required
        value = {formData.phone}  onChange={handleChange}/>
      </div>

      <div>
        <label>Cuisine:</label>
        <input type="text" name="cuisine" required
        value = {formData.cuisine}  onChange={handleChange}/>
      </div>

      <div>
        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" required
        value = {formData.nacuisineme}  onChange={handleChange}/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
