import React, { useState } from "react";

function App() {
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

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAddCustomer() {
    if (!formData.name || !formData.description || !formData.rate || !formData.balance || !formData.deposit || !formData.status) {
      alert("Barcha maydonlar to'ldirilishi shart!");
      return;
    }
    setCustomers([...customers, formData]);
    setFormData({ name: "", description: "", rate: "", balance: "", deposit: "", status: "" });
    setIsModalOpen(false);
  }

  function handleDeleteCustomer(index) {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  }

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Customer
        </button>
      </div>

      <ul className="bg-white shadow rounded-lg divide-y">
        {customers.map((customer, index) => (
          <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className="font-semibold">{customer.name}</p>
              <p className="text-sm text-gray-600">{customer.description}</p>
              <p className={`text-sm ${customer.balance < 0 ? 'text-red-500' : 'text-green-500'}`}>Balance: {customer.balance}</p>
              <p className="text-sm">Rate: {customer.rate}, Deposit: {customer.deposit}, Status: {customer.status}</p>
            </div>
            <button
              onClick={() => handleDeleteCustomer(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

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
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
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
}

export default App