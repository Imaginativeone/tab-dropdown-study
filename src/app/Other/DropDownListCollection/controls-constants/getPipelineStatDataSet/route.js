import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getPipelineStatDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getPipelineStatDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC uspDMT_GetPipelineStatWH`

  return dataSet
}
