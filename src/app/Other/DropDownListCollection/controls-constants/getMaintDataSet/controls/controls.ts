const maintenanceControls = {  
  message: 'Maint Grid Control Panel Controls',
  gridControls:
  [
    {
      apiDropdownLabel: "Label Maint",
      apiDropdownDefaultValue: { id: 1, text: 'Maint - Yes', filter: null, defaultValue: true },
      apiDropdownControls: [
        { id: 1, text: 'Maint - Yes', filter: null, defaultValue: true },
        { id: 2, text: 'Maint - No', filter: null },
        { id: 3, text: 'Maint - Yes/No', filter: null },
      ]
    }
  ]
}

export default maintenanceControls
