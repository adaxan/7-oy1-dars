// App.jsx
import React, { useState } from "react";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rate: "",
    balance: "",
    deposit: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCustomer = () => {
    if (!formData.name || !formData.description || !formData.rate || !formData.balance || !formData.deposit || !formData.status) return;
    setCustomers([...customers, formData]);
    setFormData({ name: "", description: "", rate: "", balance: "", deposit: "", status: "" });
    setIsModalOpen(false);
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Customer
        </button>
      </div>

      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Rate</th>
            <th className="p-2 text-left">Balance</th>
            <th className="p-2 text-left">Deposit</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.description}</td>
              <td className="p-2">{customer.rate}</td>
              <td className={`p-2 ${customer.balance < 0 ? 'text-red-500' : 'text-green-500'}`}>{customer.balance}</td>
              <td className="p-2">{customer.deposit}</td>
              <td className="p-2">{customer.status}</td>
              <td className="p-2">
                <button
                  onClick={() => handleDeleteCustomer(index)}
                  className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow w-80">
            <h2 className="text-lg font-bold mb-4">Add Customer</h2>
            {Object.keys(formData).map((field) => (
              <div key={field} className="mb-2">
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={field}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomer}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;