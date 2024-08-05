import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; 

const CustomProfile = () => {
  const { user, loginUser } = useContext(AuthContext);
 

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    profile_picture: null,
    phone_number: '',
    country: '',
  });

  const [preview, setPreview] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countries = data.map(country => country.name.common);
        setCountryOptions(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (formData.profile_picture) {
      setPreview(URL.createObjectURL(formData.profile_picture));
    } else {
      setPreview('');
    }
  }, [formData.profile_picture]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_picture') {
      if (window.confirm("Are you sure you want to upload a new photo?")) {
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(e);  // This will call the loginUser function from AuthContext
    // Handle form submission logic for profile
    console.log(formData);
  };

  return (
    <>
      <h2>{user ? user.names : 'Loading...'}</h2>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          {preview && <img src={preview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full border-2 border-gray-300" />}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Custom Profile</h2>

          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-sm font-semibold mb-1">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-sm font-semibold mb-1">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm font-semibold mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile_picture" className="text-sm font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              accept="image/*"
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-2">Upload a profile picture (JPEG, PNG, GIF)</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone_number" className="text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-semibold mb-1">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select country</option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#1D2B53] text-white font-semibold rounded-md hover:bg-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomProfile;
