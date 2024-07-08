import { rofo_rofr_filter_terms } from "../filters/ROFO_ROFR_filterTerms"

export async function GET() {
  
  return Response.json({
    message: 'ROFO/ROFR Grid Control Panel Controls',
    newProp: 'New Property',
    gridControls:
    [
      {
        apiDropdownLabel: "Label A",
        apiDropdownDefaultValue: { id: 1, text: 'Rofo - Yes',    filter: rofo_rofr_filter_terms[0], defaultValue:true },
        apiDropdownControls: [
          { id: 1, text: 'Rofo - Yes',    filter: rofo_rofr_filter_terms[0], defaultValue:true },
          { id: 2, text: 'Rofo - No',     filter: rofo_rofr_filter_terms[1] },
          { id: 3, text: 'Rofo - Yes/No', filter: rofo_rofr_filter_terms[2] },
        ]
      },
      // {
      //   apiDropdownLabel: "Label B",
      //   apiDropdownDefaultValue: { id: 2, text: 'B', filter: null, defaultValue: true },
      //   apiDropdownControls: [
      //     { id: 1, text: 'A', filter: null },
      //     { id: 2, text: 'B', filter: null, defaultValue: true },
      //     { id: 3, text: 'C', filter: null },
      //   ]
      // },
    ]
  });
}
