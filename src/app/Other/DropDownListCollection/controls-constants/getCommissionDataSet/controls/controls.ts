const commissionControls = {  
  message: 'Commission Grid Control Panel Controls',
  gridControls:
  [
    {
      apiDropdownName: 'Commission Controls',
      apiDropdownLabel: "Label Commission",
      apiDropdownDefaultValue: { id: 1, text: 'Comm - Yes', filter: "filterYes", defaultValue: true },
      apiDropdownControls: [
        { id: 1, text: 'Comm - Yes', filter: "filterYes", defaultValue: true },
        { id: 2, text: 'Comm - No', filter: "filterNo" },
        { id: 3, text: 'Comm - Yes/No', filter: null },
      ]
    },
    {
      apiDropdownName: "comm - B",
      apiDropdownDefaultValue: { id: 2, text: 'Comm-B', filter: 'rofo-B-filter', defaultValue: true },
      apiDropdownLabel: "Label B",
      apiDropdownControls: [
        { id: 1, text: 'Comm-A', filter: 'rofo-A-filter' },
        { id: 2, text: 'Comm-B', filter: 'rofo-B-filter', defaultValue: true },
        { id: 3, text: 'Comm-C', filter: 'rofo-C-filter' },
      ]
    },
  ]
}

export default commissionControls
