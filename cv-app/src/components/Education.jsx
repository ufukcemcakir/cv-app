import { useState } from "react";
import "./experience.css";
import { v4 as uuidv4 } from "uuid";

export default function Education() {
  const [expList, setExpList] = useState([]);

  const handleDelete = (id) => {
    setExpList(expList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul>
        {expList.map((item) => (
          <li key={item.id}>
            {item.workplace} - {item.position} ({item.start} - {item.end})
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Exp expList={expList} setExpList={setExpList} />
    </div>
  );
}

function Exp({ expList, setExpList }) {
  const [modal, setModal] = useState(false);
  const [newExp, setNewExp] = useState({
    school: "",
    faculty: "",
    start: "",
    end: "",
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
    setNewExp({ ...newExp, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setExpList([...expList, { ...newExp, id: uuidv4() }]);
    setModal(false);
    setNewExp({
      school: "",
      faculty: "",
      start: "",
      end: "",
    });
  };

  return (
    <>
    <h2>Education</h2>
      <button onClick={toggleModal} className="btn-modal">
        Add Education
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <label>School</label>
            <input
              type="text"
              name="school"
              value={newExp.school}
              onChange={handleChange}
            />
            <label>Faculty</label>
            <input
              type="text"
              name="faculty"
              value={newExp.faculty}
              onChange={handleChange}
            />
            <label>Start Date</label>
            <input
              type="text"
              name="start"
              value={newExp.start}
              onChange={handleChange}
            />
            <label>End Date</label>
            <input
              type="text"
              name="end"
              value={newExp.end}
              onChange={handleChange}
            />
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