import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export async function GET() {

  const propIDIsNotNull: CompositeFilterDescriptor = { // Abstract Review
    logic: "and",
    filters: [
      {
        field: "PropID",
        operator: "isnotnull",
      },
    ]
  }
  
  const absctractReviewFilterTerms = [
    { id: 1, text: "Yes", filter: propIDIsNotNull },
  ];
  
  return Response.json({
    message: 'Abstract Review Data Set Filters',
    getAbstractReviewDataSetFilter: absctractReviewFilterTerms
  });
}
