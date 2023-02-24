import MenuComponent from "../components/menu";
import { Screen } from "../interfaces/screen";

interface DownloadScreenProps extends Screen {}

function DownloadScreen(props: DownloadScreenProps) {
  return (
    <div className="application">
      <MenuComponent />
      <div className="content">Downloads</div>
    </div>
  );
}

export default DownloadScreen;
