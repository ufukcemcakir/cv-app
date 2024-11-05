import { useState } from 'react';

const Info = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: 'Ahmet Kaya',
        email: 'ahmet.kaya@ornek.com',
        phone: '123456789'
    });
    const [tempInfo, setTempInfo] = useState(contactInfo);

    const handleEdit = () => {
        setIsEditing(true);
        setTempInfo(contactInfo);
    };

    const handleSubmit = () => {
        setContactInfo(tempInfo);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div>
          <div>
            <h2>Contact Information</h2>
            
            {isEditing ? (
              <div>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={tempInfo.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={tempInfo.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={tempInfo.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div>
                <div>
                  <span>Name:</span>
                  <p>{contactInfo.name}</p>
                </div>
                
                <div>
                  <span>Email:</span>
                  <p>{contactInfo.email}</p>
                </div>
                
                <div>
                  <span>Phone:</span>
                  <p>{contactInfo.phone}</p>
                </div>
                
                <button
                  onClick={handleEdit}

                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      );
};

export default Info;