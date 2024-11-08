import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

const initialList = [
];

const Skills = () => {
const [list, setList] = useState(initialList);
const [name, setName] = useState('');

function handleChange(e) {
  setName(e.target.value);
}

function handleAdd() {
  const newList = list.concat({ name, id: uuidv4()});
  setList(newList);
  setName('');
}

function handleDelete(listId) {
  setList(list.filter(t => t.id !== listId));    
  }
    return (
        <div>
          <div>
            <h2>Skills</h2>
            <input type='text' value={name} onChange={handleChange} />
            <button type='button' onClick={handleAdd}>
              Add
            </button>
          </div>
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.name}<button type='button' onClick={() => handleDelete(item.id)}>Delete</button></li>
            ))}
          </ul>
        </div>
      );
};

export default Skills;