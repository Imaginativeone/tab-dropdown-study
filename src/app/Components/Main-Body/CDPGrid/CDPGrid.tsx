// import { Grid } from "@progress/kendo-react-grid"

import dynamic from "next/dynamic"
const Grid: any = dynamic(() => import("@progress/kendo-react-grid").then(module => module.Grid as any), { ssr: false })
import { GridColumn as Column } from "@progress/kendo-react-grid"

import rofoConfigColumns from "@/data/rofoConfigColumns"
import { rofoData } from "@/data/rofoData"

const CDPGrid = () => {
  
  console.log('rofoConfigColumns', rofoConfigColumns)

  return (
    <>
      {/* <h1>CDPGrid</h1> */}
      <Grid data={rofoData} style={{ height: "60vh" }}>
        {rofoConfigColumns.map((column:any, index:number) => {
          return (
            <Column key={index} {...column} field={column.DBName}
              title={column.FriendlyName} width={column.Width} />
          )
        })}
      </Grid>
    </>
  )
}

export default CDPGrid
