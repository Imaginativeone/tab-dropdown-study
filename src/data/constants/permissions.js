const permissionValues = [
  { permissionName: "rofoAccess", settingString: "ROFO/ROFR"},
  { permissionName: "commissionAccess", settingString: "Commission"},
  { permissionName: "systemMaintenanceAccess", settingString: "Maint."},
  { permissionName: "LeasingStatAccess", settingString: "LeasingStat"},
  { permissionName: "LegalAccess", settingString: "Legal"},
  { permissionName: "WHAccess", settingString: "PipelineLeaseStatsWH"},
  { permissionName: "CDAAccess", settingString: "CDA"},
  { permissionName: "OccWHAAccess", settingString: "OccupancyWH"},
  { permissionName: "GAAPAccess", settingString: "GAAPTerm"},
  { permissionName: "AbstractReview", settingString: "AbstractReview"},
  { permissionName: "LTAccess", settingString: "LeaseTransaction"},
]
 
  // Fix this
  // I can use this technique for the filters
  // After filters, EDITs
  const dataSetMap = [
    { grid: "ROFO/ROFR",             apiDataSet: "getRofoDataSet" },              // ROFO/ROFR
    { grid: "Commission",            apiDataSet: "getCommissionDataSet" },        // Commission
    { grid: "Maint.",                apiDataSet: "getMaintDataSet" },             // System Maintenance
    { grid: "LeasingStat",           apiDataSet: "getLeasingStatDataSet" },       // LeasingStat - 3920
    { grid: "Legal",                 apiDataSet: "getLegalDataSet" },             // Legal - 3716, 768 ?
    { grid: "PipelineLeaseStatsWH",  apiDataSet: "getPipelineStatDataSet" },      // PipelineLeaseStatsWH - 3808 ?
    { grid: "CDA",                   apiDataSet: "getCdaDataSet" },               // CDA - 3764
    { grid: "OccupancyWH",           apiDataSet: "getOccupancyDataSet" },         // OccupancyWH - 3651, 3679
    { grid: "GAAP Term",             apiDataSet: "getGaapTermDataSet" },          // GAAPTerm - 10 on LoadGAAPTerm
    { grid: "Abstract Review",       apiDataSet: "getAbstractReviewDataSet" },    // AbstractReview - ?
    { grid: "Lease Transaction",     apiDataSet: "getLeaseTransactionDataSet" },  // LeaseTransaction - 4087
  ]
 
export { permissionValues, dataSetMap }
