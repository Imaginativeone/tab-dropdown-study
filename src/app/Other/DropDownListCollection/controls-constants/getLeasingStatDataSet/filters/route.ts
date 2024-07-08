import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export async function GET() {

  const propIDIsNotNull: CompositeFilterDescriptor = { // Leasing Stat
    logic: "and",
    filters: [
      {
        field: "PropID",
        operator: "isnotnull",
      },
    ]
  }
  
  const leasingStatFilterTerms = [
    { id: 1, text: "Yes", filter: propIDIsNotNull },
  ];
  
  return Response.json({
    message: 'Leasing Stat Data Set Filters',
    getLeasingStatDataSetFilter: leasingStatFilterTerms
  });
}
