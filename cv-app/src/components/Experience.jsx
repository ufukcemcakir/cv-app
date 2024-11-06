import { useState } from "react";
import "./experience.css";
import { v4 as uuidv4 } from "uuid";

export default function Experience() {
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
    workplace: "",
    position: "",
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
      workplace: "",
      position: "",
      start: "",
      end: "",
    });
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Experience
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <label>Work Place</label>
            <input
              type="text"
              name="workplace"
              value={newExp.workplace}
              onChange={handleChange}
            />
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={newExp.position}
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