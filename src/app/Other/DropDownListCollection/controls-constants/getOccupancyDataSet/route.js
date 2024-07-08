import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getOccupancyDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getOccupancyDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [dbo].[uspDMT_GetOccupancy]`

  return dataSet
}
