import React from 'react'

function NavItem({linkName})  {
    return <li className='p-3 hover:text-espbeige lg:text-xl'>

    {linkName}
    </li>;
}

export default NavItem