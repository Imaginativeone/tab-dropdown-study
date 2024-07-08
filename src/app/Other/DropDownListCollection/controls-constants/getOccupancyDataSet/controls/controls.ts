// import { leasing_stat_filter_terms } from "../filters/LEASING_STAT_filterTerms"

const occupancyControls = {
  message: 'Occupancy Grid Control Panel Controls',
  newProp: 'New Property',
  gridControls:
  [
    {
      apiDropdownName: "Occupancy - A",
      apiDropdownDefaultValue: { id: 1, text: 'Occupancy - Yes', filter: null, defaultValue:true },
      apiDropdownLabel: "Label A",
      apiDropdownControls: [
        { id: 1, text: 'Occupancy - Yes',    filter: null, defaultValue:true },
        { id: 2, text: 'Occupancy - No',     filter: null},
        { id: 3, text: 'Occupancy - Yes/No', filter: null},
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

export default occupancyControls
