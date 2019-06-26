import React from "react";
import AddList from "../components/addlist";

const SubList = (props) => {
    return (
        <ul>
            {props.subList && props.subList.map(i => (
                <li key={i.id}>
                    {i.title}
                    <AddList
                        state={props.state}
                        setState={props.setState}
                        subList={props.subList}
                        setSubList={props.setSubList}
                        subListStartId={i.id}
                        allList={props.allList}
                    />
                    {i.subList.length > 0 &&
                        <SubList
                            state={props.state}
                            setState={props.setState}
                            setSubList={props.setSubList}
                            subList={i.subList}
                            allList={props.allList}
                        />
                    }
                </li>
            ))}
        </ul>
    );
};

export default SubList;