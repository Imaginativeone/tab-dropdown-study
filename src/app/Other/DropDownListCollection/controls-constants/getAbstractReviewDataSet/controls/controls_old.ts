const abstractReviewControls = {  
  message: 'Abs Rvw Grid Control Panel Controls',
  gridControls:
  [
    {
      apiDropdownLabel: "Label Abs Rvw",
      apiDropdownDefaultValue: { id: 1, text: 'Abs Rvw - Yes', filter: null, defaultValue: true },
      apiDropdownControls: [
        { id: 1, text: 'Abs Rvw - Yes', filter: null, defaultValue: true },
        { id: 2, text: 'Abs Rvw - No', filter: null },
        { id: 3, text: 'Abs Rvw - Yes/No', filter: null },
      ]
    }
  ]
}

export default abstractReviewControls
