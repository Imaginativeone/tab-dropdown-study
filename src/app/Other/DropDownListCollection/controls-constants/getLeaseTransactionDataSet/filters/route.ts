import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export async function GET() {

  const propIDIsNotNull: CompositeFilterDescriptor = { // Lease Transaction
    logic: "and",
    filters: [
      {
        field: "PropID",
        operator: "isnotnull",
      },
    ]
  }
  
  const leaseTransactionFilterTerms = [
    { id: 1, text: "Yes", filter: propIDIsNotNull },
  ];
  
  return Response.json({
    message: 'Lease Transaction Data Set Filters',
    getLeaseTransactionDataSetFilter: leaseTransactionFilterTerms
  });
}
