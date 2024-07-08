// import { leasing_stat_filter_terms } from "../filters/LEASING_STAT_filterTerms"

const leaseTransactionControls = {
  message: 'LeaseTransaction Grid Control Panel Controls',
  newProp: 'New Property',
  gridControls:
  [
    {
      apiDropdownName: "LeaseTransaction - A",
      apiDropdownDefaultValue: { id: 1, text: 'LeaseTransaction - Yes', filter: null, defaultValue:true },
      apiDropdownLabel: "Label A",
      apiDropdownControls: [
        { id: 1, text: 'LT - Yes',    filter: null, defaultValue:true },
        { id: 2, text: 'LT - No',     filter: null},
        { id: 3, text: 'LT - Yes/No', filter: null},
      ]
    },
    // {
    //   apiDropdownName: "rofo - B",
    //   apiDropdownLabel: "Label B",
    //   apiDropdownControls: [
    //     { id: 1, text: 'A', filter: null },
    //     { id: 2, text: 'B', filter: null, defaultValue: true },
    //     { id: 3, text: 'C', filter: null },
    //   ]
    // },
  ]
}

export default leaseTransactionControls
