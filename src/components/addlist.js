import React, {useState} from 'react';

const AddList = (props) => {
    const [value, setValue] = useState('');
    const addTitle = event => {
        setValue(event.target.value);
    };
    const addLink = event => {
        if (value !== '') {
            let newList = {
                id: Math.round(Math.random() * 10000),
                title: value,
                subList: []
            };
            sortArray(newList);
            props.setSubList(props.allList);
            props.setState(!props.state);
        }
        setValue('');
        event.preventDefault();
    };
    const sortArray = (obj) => {
        let subListArray = props.subList,
            allList = props.allList,
            firstList = props.lists;
        if (!allList.length || firstList) {
            allList.push(obj);
        }
        subListArray && subListArray.forEach((elem) => {
            if (elem.id === props.subListStartId) {
                elem.subList.push(obj);
            }
        });
    };
    return (
        <form onSubmit={addLink}>
            <input type="text" value={value} onChange={addTitle}/>
            <button type="submit">+</button>
        </form>
    )
};

export default AddList;