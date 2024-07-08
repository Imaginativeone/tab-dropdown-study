import AppBarComponent from "@/app/Components/Main-Body/AppBarComponent/AppBarComponent";

export async function GET() {
  
  return Response.json({
    message: 'CDA Grid Control Panel Controls',
    // message: (`${<AppBarComponent></AppBarComponent>}`),
    gridControls:
    [
      {
        apiDropdownLabel: "Label CDA",
        apiDropdownControls: [
          { id: 1, text: 'CDA - Yes', filter: null, defaultValue: true },
          { id: 2, text: 'CDA - No', filter: null },
          { id: 3, text: 'CDA - Yes/No', filter: null },
        ]
      }
    ]
  });
}
