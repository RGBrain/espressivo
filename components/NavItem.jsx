import React from 'react'

function NavItem({linkName})  {
    return <li className='p-3 hover:text-beige'>

    {linkName}
    </li>;
}

export default NavItem