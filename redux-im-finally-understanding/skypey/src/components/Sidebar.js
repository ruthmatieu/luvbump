import React from 'react';
import '../stylesheets/sidebar.css';
import User from './User';

const Sidebar = ({contacts}) => {
    
    return (
        <aside className='Sidebar'>
            {contacts.map(item => 
                <User user={item} key={item.user_id}/>
            )}
        </aside>
    )
};

export default Sidebar;