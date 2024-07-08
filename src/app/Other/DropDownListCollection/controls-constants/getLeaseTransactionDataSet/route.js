import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getLeaseTransactionDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getLeaseTransactionDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [dbo].[uspDMT_GetDM0065]` // Actual query needs a parameter

  return dataSet
}
