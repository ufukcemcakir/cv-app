import { useState } from "react";
import "./experience.css";
import { v4 as uuidv4 } from "uuid";

export default function Languages() {
  const [langList, setLangList] = useState([]);

  const handleDelete = (id) => {
    setLangList(langList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul>
        {langList.map((item) => (
          <li key={item.id}>
            {item.language} - {item.level}
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Lang langList={langList} setLangList={setLangList} />
    </div>
  );
}

function Lang({ langList, setLangList }) {
  const [modal, setModal] = useState(false);
  const [newLang, setNewLang] = useState({
    language: "",
    level: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleChange = (e) => {
    setNewLang({ ...newLang, [e.target.name]: e.target.value });
  };

  const handleDropChange = (event) => {
    setNewLang({ ...newLang, level: event.target.value });
  };

  const handleAdd = () => {
    setLangList([...langList, { ...newLang, id: uuidv4() }]);
    setModal(false);
    setNewLang({
      language: "",
      level: "",
    });
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Language
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <label>Language</label>
            <input
              type="text"
              name="language"
              value={newLang.language}
              onChange={handleChange}
            />
            <label>Level</label>
            <select value={newLang.level} onChange={handleDropChange}>
              <option value="">Select a level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <div>
              <button type="button" onClick={handleAdd}>
                Add
              </button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}