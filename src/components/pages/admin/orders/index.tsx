import GenericTable, { ColumnType } from "../../../atoms/table";
import { recentOrdersDummyData } from "../../../../mock/mockOrderData";
import { Order, OrderStatus } from "../../../../model/order";
import ProductsFrame from "../../../molecules/products-frame";

export default function AdminOrders() {
  const columns: ColumnType<Order>[] = [
    // {
    //   title: "Product",
    //   dataIndex: "product",
    //   key: "product",
    // },
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Customer name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: OrderStatus.Pending | OrderStatus.Completed | OrderStatus.Cancelled) => {
        const statusColor = {
          Pending: "orange",
          Completed: "green",
          Cancelled: "red",
        };
        return <span style={{ color: statusColor[status] }}>{status}</span>;
      },
    },
    {
      title: "Amount",
      dataIndex: "total",
      key: "total",
    },
  ];
  return (
    <div>
      <ProductsFrame title="Recent Purchase" subText="...">
        <GenericTable columns={columns} data={recentOrdersDummyData} />
      </ProductsFrame>
    </div>
  );
}
