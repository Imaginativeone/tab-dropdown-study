// import { leasing_stat_filter_terms } from "../filters/LEASING_STAT_filterTerms"

const leasingStatControls = {
  message: 'LeasingStat Grid Control Panel Controls',
  newProp: 'New Property',
  gridControls:
  [
    {
      apiDropdownName: "LeasingStat - A",
      apiDropdownDefaultValue: { id: 1, text: 'LeasingStat - Yes', filter: null, defaultValue:true },
      apiDropdownLabel: "Label A",
      apiDropdownControls: [
        { id: 1, text: 'LeasingStat - Yes',    filter: null, defaultValue:true },
        { id: 2, text: 'LeasingStat - No',     filter: null},
        { id: 3, text: 'LeasingStat - Yes/No', filter: null},
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

export default leasingStatControls
