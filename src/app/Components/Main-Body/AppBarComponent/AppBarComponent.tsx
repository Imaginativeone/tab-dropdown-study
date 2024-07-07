import { AppBar, AppBarSection, AppBarSpacer, Avatar } from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { bellIcon, menuIcon } from "@progress/kendo-svg-icons";
 
import "./AppBarComponent.css"
 
let kendokaAvatar = "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";
 
const AppBarComponent = (props:any) => {
  const { user } = props
  return (
    <>
      <AppBar id="kAppbarLight">
        <AppBarSection>
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <SvgIcon icon={menuIcon} />
          </button>
        </AppBarSection>
        <AppBarSpacer style={{ width: 4 }} />
        <AppBarSection>
          <h1 className="title">Deal Manager Tracking</h1>
        </AppBarSection>
 
        <AppBarSpacer style={{ width: 32 }} />
 
        <AppBarSection>
          <ul id="frogger">
            <li>
              <span>File</span>
            </li>
            <li>
              <span>Maintenance</span>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </AppBarSection>
 
        <AppBarSpacer />
 
        <AppBarSection>
          {user}
        </AppBarSection>
 
        <AppBarSection className="actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <SvgIcon icon={bellIcon} />
              <Badge shape="dot" themeColor="info" size="small" position="inside" />
            </BadgeContainer>
          </button>
        </AppBarSection>
 
        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>
 
        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>
    </>
  )
}
 
export default AppBarComponent