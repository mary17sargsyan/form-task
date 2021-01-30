import React, {Component}from 'react';
import Sidebarmenu from '../../SematicUi/Sidebar/Sidebar'

import Menubar from '../../SematicUi/Menu/Menubar';


class NavigationMenu extends Component {
  
    render (){

       
        return (
            <div>
                <Menubar/>
               
                <Sidebarmenu 
               />
              
            </div>
        );
    }
}
export default NavigationMenu;