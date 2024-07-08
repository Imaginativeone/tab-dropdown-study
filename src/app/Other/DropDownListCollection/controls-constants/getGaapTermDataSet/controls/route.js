import AppBarComponent from "@/app/Components/Main-Body/AppBarComponent/AppBarComponent";

export async function GET() {
  
  return Response.json({
    message: 'GAAP Term Control Panel',
    // message: (`${<AppBarComponent></AppBarComponent>}`),
    gridControls:
    [
      {
        apiDropdownLabel: "Label GAAP Term",
        apiDropdownControls: [
          { id: 1, text: 'Yes', filter: null },
          { id: 2, text: 'No', filter: null },
          { id: 3, text: 'Yes/No', filter: null },
        ]
      }
    ]
  });
}
