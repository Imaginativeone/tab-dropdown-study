export async function GET() {
  
  return Response.json({
    message: 'Maintenance Grid Control Panel',
    gridControls:
    [
      {
        apiDropdownLabel: "Label Maintenance",
        apiDropdownDefaultValue: { id: 1, text: 'Maint - Yes', filter: null, defaultValue: true },
        apiDropdownControls: [
          { id: 1, text: 'Maint - Yes', filter: null },
          { id: 2, text: 'Maint - No', filter: null },
          { id: 3, text: 'Maint - Yes/No', filter: null },
        ]
      }
    ]
  });
}
