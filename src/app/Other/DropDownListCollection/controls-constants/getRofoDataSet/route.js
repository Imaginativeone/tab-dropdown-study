import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getRofoDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getRofoDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [dbo].[uspDMT_GetDM0065]`

  return dataSet
}

// import prisma from '../../../../lib/prisma'
// import { rofoFilterTerms } from './filters/ROFO_ROFR_filterTerms';

// export async function GET() {
//   const jsonDataSet = await getRofoDataSet();

//   const alternativeJsonData = { jsonDataSet: jsonDataSet, rofoFilter: rofoFilterTerms, rofoEditorTerms: null }

//   const jsonData = [
//     jsonDataSet,
//     rofoFilterTerms,
//     {}, // rofoEditorTerms
//     alternativeJsonData
//   ]
  
//   // const jsonData = { jsonDataSet: jsonDataSet, rofoFilter: rofoFilterTerms, rofoEditorTerms: null }

//   return Response.json(jsonData);
// }

// const getRofoDataSet = async () => {

//   // Execute stored procedure
//   let dataSet = await prisma.$queryRaw`
//   EXEC [dbo].[uspDMT_GetDM0065]`

//   return dataSet
// }
