import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export async function GET() {

  const propIDIsNotNull: CompositeFilterDescriptor = { // ROFO/ROFR
    logic: "and",
    filters: [
      {
        field: "PropID",
        operator: "isnotnull",
      },
    ]
  }
  
  const commissionFilterTerms = [
    { id: 1, text: "Yes", filter: propIDIsNotNull },
  ];
  
  return Response.json({
    message: 'Commission Data Set Filters',
    getCommissionDataSetFilter: commissionFilterTerms
  });
}
