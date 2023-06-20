import { Row } from "react-bootstrap"
import MainColumn from "./maincolumn/MainColumn"
import Footer from "./Sidebar/Footer"
import SideColumn from "./Sidebar/SideColumn"

const MainProfilePage = () => {
  return (
    <Row>
      <MainColumn />
      <SideColumn />
      <Footer />
    </Row>
  )
}
export default MainProfilePage
