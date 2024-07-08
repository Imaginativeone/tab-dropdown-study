// import { leasing_stat_filter_terms } from "../filters/LEASING_STAT_filterTerms"

const abstractReviewControls = {
  message: 'AbstractReview Grid Control Panel Controls',
  newProp: 'New Property',
  gridControls:
  [
    {
      apiDropdownName: "AbstractReview - A",
      apiDropdownDefaultValue: { id: 1, text: 'AbstractReview - Yes', filter: null, defaultValue:true },
      apiDropdownLabel: "Label A",
      apiDropdownControls: [
        { id: 1, text: 'AbsRvw - Yes',    filter: null, defaultValue:true },
        { id: 2, text: 'AbsRvw - No',     filter: null},
        { id: 3, text: 'AbsRvw - Yes/No', filter: null},
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

export default abstractReviewControls
