// import prisma from '../../../../lib/prisma'

// export async function GET() {
//   const jsonDataSet = await getCommissionDataSet();

//   const alternativeJsonData = { jsonDataSet: jsonDataSet, commissionFilter: commissionFilterTerms, commissionEditorTerms: null }

//   const jsonData = [
//     jsonDataSet,
//     commissionFilterTerms,
//     {}, // commissionEditorTerms
//     alternativeJsonData
//   ]

//   // console.log(jsonData);

//   return Response.json(jsonData);
// }

// const getCommissionDataSet = async () => {

//   // Execute stored procedure
//   let dataSet = await prisma.$queryRaw`
//   EXEC [dbo].[uspDMT_GetDM0060]`

//   return dataSet
// }

import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getCommissionDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getCommissionDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [dbo].[uspDMT_GetDM0060]`

  return dataSet
}

// import prisma from '../../../../lib/prisma'
// import { commissionFilterTerms } from './filters/commissionfilterTerms';

// export async function GET() {
//   const jsonDataSet = await getCommissionDataSet();

//   const alternativeJsonData = { jsonDataSet: jsonDataSet, commissionFilter: commissionFilterTerms, commissionEditorTerms: null }

//   const jsonData = [
//     jsonDataSet,
//     commissionFilterTerms,
//     {}, // commissionEditorTerms
//     alternativeJsonData
//   ]
  
//   // const jsonData = { jsonDataSet: jsonDataSet, commissionFilter: commissionFilterTerms, commissionEditorTerms: null }

//   return Response.json(jsonData);
// }

// const getCommissionDataSet = async () => {

//   // Execute stored procedure
//   let dataSet = await prisma.$queryRaw`
//   EXEC [dbo].[uspDMT_GetDM0060]`

//   return dataSet
// }
