import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getLegalDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getLegalDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC uspLNT_GetDealsLegalNegotiations`

  return dataSet
}
