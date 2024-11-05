import { useState } from 'react';

const Summary = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        desc: 'Ahmet Kaya',
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
            <h2>Personal Summary</h2>
            
            {isEditing ? (
              <div>
                <div>
                  <input
                    className='summary'
                    type="text"
                    name="name"
                    value={tempInfo.name}
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
                  <p>{contactInfo.name}</p>
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

export default Summary;