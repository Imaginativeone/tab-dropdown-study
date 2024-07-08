import { CompositeFilterDescriptor } from "@progress/kendo-data-query";

export async function GET() {

  const tenantResponseDateIsNull: CompositeFilterDescriptor = { // ROFO/ROFR
    logic: "and",
    filters: [
      {
        field: "TenantResponseDate",
        operator: "isnull",
      },
    ]
  }
  
  const tenantResponseDateIsNotNull: CompositeFilterDescriptor = { // ROFO/ROFR
    logic: "and",
    filters: [
      {
        field: "TenantResponseDate",
        operator: "isnotnull",
      },
    ]
  }
  
  const tenantResponseAll: CompositeFilterDescriptor = { // ROFO/ROFR
    logic: "or",
    filters: [
      {
        field: "TenantResponseDate",
        operator: "isnull",
      },
      {
        field: "TenantResponseDate",
        operator: "isnotnull",
      },
    ]
  }
  
  const rofo_rofr_filter_terms = [
    tenantResponseDateIsNull,
    tenantResponseDateIsNotNull,
    tenantResponseAll
  ]
  
  const rofoFilterTerms = [
    { id: 1, text: "Yes", filter: tenantResponseDateIsNull },
    { id: 2, text: "No", filter: tenantResponseDateIsNotNull },
    { id: 3, text: "Yes/No", filter: tenantResponseAll }
  ];
  
  return Response.json({
    message: 'ROFO/ROFR Data Set Filters',
    getRofoDataSetFilter: rofoFilterTerms
  });
}
