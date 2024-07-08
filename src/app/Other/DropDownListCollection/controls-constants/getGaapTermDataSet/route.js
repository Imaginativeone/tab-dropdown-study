import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getGaapTermDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getGaapTermDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [uspDMT_GetLTGAAPTerm]`

  return dataSet
}
