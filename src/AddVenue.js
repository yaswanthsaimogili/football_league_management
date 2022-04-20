import React, { useState, useEffect } from "react";
import "./App.css";

function AddVenue() {
    const initialValues = {
        venueName: "",
        imageUrl: "",
        venueLocation: "",
        venueCapacity: "",
        venueDescription: "",
      };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        if (!values.venueName) {
          errors.venueName = "Venue Name is required!";
        }
        if (!values.imageUrl) {
          errors.imageUrl = "Image Url is required!";
        }
        if (!values.venueLocation) {
          errors.venueLocation = "Venue Location is required";
        }
        if (!values.venueCapacity) {
          errors.venueCapacity = "Venue Capacity is required";
        }
        if (!values.venueDescription) {
          errors.venueDescription = "Venue Description is required";
        }
    
        return errors;
      };
    
      return (
        <div className="container">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <div></div>
          )}
          <form onSubmit={handleSubmit}>
            <h1>Venue Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="venueName"
                  placeholder="Enter Venue Name"
                  value={formValues.venueName}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.venueName}</p>
    
              <div className="field">
                <label>Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Venue URL"
                  value={formValues.imageUrl}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.imageUrl}</p>
    
              <div className="field">
                <label>Location</label>
                <input
                  type="text"
                  name="venueLocation"
                  placeholder="Enter Venue Location"
                  value={formValues.venueLocation}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.venueLocation}</p>
    
              <div className="field">
                <label>Capacity</label>
                <input
                  type="text"
                  name="venueCapacity"
                  placeholder="Enter Venue Capacity"
                  value={formValues.venueCapacity}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.venueCapacity}</p>
    
              <div className="field">
                <label>Description</label>
                <textarea
                  name="venueDescription"
                  placeholder="Enter Venue Description"
                  value={formValues.venueDescription}
                  onChange={handleChange}
                ></textarea>
              </div>
              <p>{formErrors.venueDescription}</p>
              <button className="fluid ui button blue">Submit</button>
            </div>
          </form>
        </div>
      );
}

export default AddVenue