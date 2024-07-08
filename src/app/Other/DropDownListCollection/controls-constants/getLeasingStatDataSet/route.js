import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getLeasingStatDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getLeasingStatDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [uspDMT_GetLeasingStats]`

  return dataSet
}
