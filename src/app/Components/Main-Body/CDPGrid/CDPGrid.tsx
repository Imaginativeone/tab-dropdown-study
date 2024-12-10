// import { Grid } from "@progress/kendo-react-grid"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Grid: any = dynamic(
  () => import("@progress/kendo-react-grid").then(module => module.Grid as any),
  { ssr: false }
);
import { GridColumn as Column } from "@progress/kendo-react-grid";

// import rofoConfigColumns from "@/data/rofoConfigColumns";
// import { rofoData } from "@/data/rofoData";
import { getAllConfigColumns, getAllROFOData } from "@/lib/actions";

const CDPGrid = () => {
  // console.log("rofoConfigColumns", rofoConfigColumns);
  const [rofoData, setRofoData] = useState([]);
  const [rofoConfigColumns, setRofoConfigColumns] = useState([]);

  async function getData() {
    const rofoData = await getAllROFOData();
    const rofoConfigData = await getAllConfigColumns();

    setRofoConfigColumns(rofoConfigData);
    setRofoData(rofoData);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (rofoData) console.log(rofoData);
  }, [rofoData]);

  useEffect(() => {
    if (rofoConfigColumns) console.log(rofoConfigColumns);
  }, [rofoConfigColumns]);
  return (
    <>
      {rofoData && rofoConfigColumns && (
        <>
          {/* <h1>CDPGrid</h1> */}
          <Grid data={rofoData} style={{ height: "60vh" }}>
            {rofoConfigColumns.map((column: any, index: number) => {
              return (
                <Column
                  key={index}
                  {...column}
                  field={column.DBName}
                  title={column.FriendlyName}
                  width={column.Width}
                />
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
};

export default CDPGrid;
