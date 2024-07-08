import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getCdaDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getCdaDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [dbo].[uspDMT_GetCDA]`

  return dataSet
}
