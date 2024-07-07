"use client"

import AppBarComponent from './Components/Main-Body/AppBarComponent/AppBarComponent';
import GridControlPanelTabShare from './Components/Main-Body/GridControlPanelTabShare/GridControlPanelTabShare';
// import getPermissions from './utilities/getPermissions'
import { permissionValues } from './constants/permissions';
 
import '@progress/kendo-theme-default/dist/all.css';
// import user from './utilities/user'

export default function Home() {

  console.log('permissionValues', permissionValues)

  return (
    <main id="appContainer">
      <AppBarComponent user="John Doe"></AppBarComponent>
      <GridControlPanelTabShare user="John Doe" allGrids={permissionValues} />
    </main>
  );
}

// import AppBarComponent from './Components/Main-Body/AppBarComponent/AppBarComponent';
// import GridControlPanelTabShare from './Components/Main-Body/GridControlPanelTabShare/GridControlPanelTabShare';
// import getPermissions from './utilities/getPermissions'
// import { permissionValues } from './constants/permissions';
 
// import '@progress/kendo-theme-default/dist/all.css';
// import user from './utilities/user'
 
// export default async function Home() {
//   const dbPermissions = await (await getPermissions(user, permissionValues)).filter(grid => parseInt(grid.permSetting) === 1)
//   return (
//     <main id="appContainer">
//       <AppBarComponent user={user}></AppBarComponent>
//       <GridControlPanelTabShare user={user} allGrids={permissionValues} activeGrids={dbPermissions}></GridControlPanelTabShare>
//     </main>
//   );
// }

// export default async function Home() {
//   const dbPermissions = await (await getPermissions(user, permissionValues)).filter(grid => parseInt(grid.permSetting) === 1)
//   return (
//     <main id="appContainer">
//       <AppBarComponent user={user}></AppBarComponent>
//       <GridControlPanelTabShare user={user} allGrids={permissionValues} activeGrids={dbPermissions}></GridControlPanelTabShare>
//     </main>
//   );
// }

// import Image from "next/image";

// import { Button } from "@progress/kendo-react-buttons";

// import { 
//   Card, 
//   CardActions,
//   CardBody, 
//   CardHeader, 
//   CardTitle 
// } from "@progress/kendo-react-layout";

// import styles from "./page.module.css";

import { useRouter } from 'next/navigation';
// import AppBarComponent from "./Components/Main-Body/AppBarComponent/AppBarComponent";
// import GridControlPanelTabShare from "./Components/Main-Body/GridControlPanelTabShare/GridControlPanelTabShare";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <>
//       <AppBarComponent user="John Doe" />
//       <GridControlPanelTabShare />
//     </>
//   )
// }
