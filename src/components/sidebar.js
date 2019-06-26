import React, {useState} from 'react';
import '../styles/main.css';
import AddList from "../components/addlist";
import SubList from "./subList";

const Sidebar = () => {
    const [state, setState] = useState(false);
    const [lists, setLists] = useState(true);
    const [subList, setSubList] = useState([
        {
            id: 1,
            title: 'react',
            subList: [{
                id: 1.1,
                title: 'react1',
                subList: [{
                    id: 1.2,
                    title: 'react2',
                    subList: []
                }]
            }]
        },
        {
            id: 2,
            title: 'angular',
            subList: [{
                id: 2.1,
                title: 'angular1',
                subList: [{
                    id: 2.2,
                    title: 'angular2',
                    subList: [{
                        id: 2.3,
                        title: 'angular3',
                        subList: []
                    }]
                }]
            }]
        },
        {
            id: 3,
            title: 'vue',
            subList: []
        }
    ]);
    return (
        <div className="sidebar">
            <p>Add task</p>
            <AddList
                lists={lists}
                setList={setLists}
                state={state}
                setState={setState}
                subList={subList}
                setSubList={setSubList}
                allList={subList}
            />
            <p>Task items</p>
            {subList && subList.map(item => (
            <li key={item.id}>
                <span>{item.title}</span>
                <AddList
                    state={state}
                    setState={setState}
                    subList={subList}
                    setSubList={setSubList}
                    subListStartId={item.id}
                    allList={subList}
                />
                {item.subList && item.subList.length > 0 &&
                <SubList
                    lists={lists}
                    setLists={setLists}
                    state={state}
                    setState={setState}
                    setSubList={setSubList}
                    subList={item.subList}
                    allList={subList}
                />
                }
            </li>
        ))}
        </div>
    );
};

export default Sidebar;