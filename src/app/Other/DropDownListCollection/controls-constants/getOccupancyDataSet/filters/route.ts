import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export async function GET() {

  const propIDIsNotNull: CompositeFilterDescriptor = { // Occupancy
    logic: "and",
    filters: [
      {
        field: "PropID",
        operator: "isnotnull",
      },
    ]
  }
  
  const occupancyFilterTerms = [
    { id: 1, text: "Yes", filter: propIDIsNotNull },
  ];
  
  return Response.json({
    message: 'Occupancy Data Set Filters',
    getOccupancyDataSetFilter: occupancyFilterTerms
  });
}
