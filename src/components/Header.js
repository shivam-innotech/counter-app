import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { newGroupMetadata } from '../App';
import { v4 as uuid } from 'uuid';

const Header = () => {
    const { dispatchData } = useContext(AppContext);

    const handleAddNewGroup = () => {
        dispatchData({ type: 'ADD_GROUP', payload: { groupId: uuid(), newGroup: newGroupMetadata } });
    };
    return (
        <header className="px-3">
            <div className="header">
                <button className="p-2 mx-5 add" onClick={handleAddNewGroup}>Add Counter</button>
                {/* <p className="p-2 mx-5 add" >Total</p> */}
            </div>
        </header >
    );
};

export default Header;