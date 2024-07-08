export async function GET() {
  
  return Response.json({
    message: 'Occupancy Grid Control Panel',
    gridControls:
    [
      {
        apiDropdownLabel: "Label Occupancy",
        apiDropdownControls: [
          { id: 1, text: 'Yes', filter: null },
          { id: 2, text: 'No', filter: null },
          { id: 3, text: 'Yes/No', filter: null },
        ]
      }
    ]
  });
}
