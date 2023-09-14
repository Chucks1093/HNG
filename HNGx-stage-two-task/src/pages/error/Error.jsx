import { Link } from "react-router-dom";
import "./style.scss";

function Error() {
  return (
    <div className="error__page">
        <img src="/error.svg" alt="404" />
        <p>An error occurred go back <Link to="/">Home</Link></p>
    </div>
  )
}
export default Error