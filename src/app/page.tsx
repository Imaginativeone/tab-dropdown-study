"use client"

import AppBarComponent from './Components/Main-Body/AppBarComponent/AppBarComponent';
import GridControlPanelTabShare from './Components/Main-Body/GridControlPanelTabShare/GridControlPanelTabShare';
import { permissionValues } from '../data/constants/permissions';
 
import '@progress/kendo-theme-default/dist/all.css';
// import user from './utilities/user'

export default function Home() {

  // console.log('permissionValues', permissionValues)

  return (
    <main id="appContainer">
      <AppBarComponent user="John Doe"></AppBarComponent>
      <GridControlPanelTabShare user="John Doe" allGrids={permissionValues} />
    </main>
  );
}
