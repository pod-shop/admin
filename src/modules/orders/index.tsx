import moment from 'moment';
import { Order, Orders } from '@/types/index';

export type OrdersProps = {
  orders: Orders
}

const Orders = ({ orders }: OrdersProps) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col" className="text-end"> Action </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map(o => (
              <OrdersItem key={o.id} order={o} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

type OrdersItemProps = {
  order: Order
}

const OrdersItem = ({ order }: OrdersItemProps) => {
  const { user, items, status } = order;

  return (
    <>
      <tr>
        <td>{order.id}</td>
        <td><b>{user.name}</b></td>
        <td>{user.email}</td>
        <td>$9.00</td>
        <td><span className="badge rounded-pill alert-warning">{order.status}</span></td>
        <td>{moment(order.createdAt).toLocaleString()}</td>
        <td className="text-end">
          <a href="#" className="btn btn-light">Detail</a>
          <div className="dropdown">
            <a href="#" data-bs-toggle="dropdown" className="btn btn-light"> <i
              className="material-icons md-more_horiz"></i>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">View detail</a>
              <a className="dropdown-item" href="#">Edit info</a>
              <a className="dropdown-item text-danger" href="#">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default Orders;
