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
