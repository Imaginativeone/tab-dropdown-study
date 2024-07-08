import prisma from '../../../../lib/prisma'

export async function GET() {
  const jsonData = await getAbstractReviewDataSet();

  // console.log(jsonData);

  return Response.json(jsonData);
}

const getAbstractReviewDataSet = async () => {

  // Execute stored procedure
  let dataSet = await prisma.$queryRaw`
  EXEC [dbo].[uspDMT_GetLTAbstractReview]`

  return dataSet
}
