import { FaFileAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoQrCode } from "react-icons/io5";
import { MdInventory, MdOutlineInventory2 } from "react-icons/md";
import { RiImportFill } from "react-icons/ri";

export interface RouteType {
  path: string;
  name: string;
  icon?: React.ReactNode;
}
export const mockAdminRouteData: RouteType[] = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: <IoQrCode />,
  },
  {
    path: "products",
    name: "Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    path: "orders",
    name: "Orders",
    icon: <FaFileAlt />,
  },
  {
    path: "customers",
    name: "Customer",
    icon: <IoIosPeople />,
  },
  {
    path: "inventory",
    name: "Inventory",
    icon: <MdInventory />,
  },
  {
    path: "import",
    name: "Import",
    icon: <RiImportFill />,
  },
];
