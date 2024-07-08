import AppBarComponent from "@/app/Components/Main-Body/AppBarComponent/AppBarComponent";

export async function GET() {
  
  return Response.json({
    message: 'Commission Grid Control Panel Controls',
    // message: (`${<AppBarComponent></AppBarComponent>}`),
    gridControls:
    [
      {
        apiDropdownLabel: "Label Commission",
        apiDropdownDefaultValue: { id: 1, text: 'Comm - Yes', filter: null, defaultValue: true },
        apiDropdownControls: [
          { id: 1, text: 'Comm - Yes', filter: null, defaultValue: true },
          { id: 2, text: 'Comm - No', filter: null },
          { id: 3, text: 'Comm - Yes/No', filter: null },
        ]
      }
    ]
  });
}
