const commissionControls = {  
  message: 'Commission Grid Control Panel Controls',
  gridControls:
  [
    {
      apiDropdownName: 'Commission Controls',
      apiDropdownLabel: "Label Commission",
      apiDropdownDefaultValue: { id: 1, text: 'Comm - Yes', filter: null, defaultValue: true },
      apiDropdownControls: [
        { id: 1, text: 'Comm - Yes', filter: null, defaultValue: true },
        { id: 2, text: 'Comm - No', filter: null },
        { id: 3, text: 'Comm - Yes/No', filter: null },
      ]
    }
  ]
}

export default commissionControls
