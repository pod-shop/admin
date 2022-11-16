import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { OrderDetails, OrderItem } from "@/types/index";

export type OrderDetailsProps = {
  order: NonNullable<OrderDetails>
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const { user, items } = order;

  return (
    <>
      <header className="card-header">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <span>
              <i className="material-icons md-calendar_today"></i> <b>{moment(order?.createdAt).toLocaleString()}</b>
              {/* <b>Wed, Aug 13, 2020, 4:34PM</b> */}
            </span> <br />
            <small className="text-muted">Order ID: {order?.id}</small>
          </div>
          <div className="col-lg-6 col-md-6 ms-auto text-md-end">
            <select className="form-select d-inline-block" style={{ maxWidth: '200px' }}>
              <option>Change status</option>
              <option>Awaiting payment</option>
              <option>Confirmed</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <a className="btn btn-light" href="#">Save</a>
            <a className="btn btn-secondary ms-2" href="#"><i className="icon material-icons md-print"></i></a>
          </div>
        </div>
      </header>
      <div className="card-body">

        <div className="row mb-5 order-info-wrap">
          <div className="col-md-4">
            <article className="icontext align-items-start">
              <span className="icon icon-sm rounded-circle bg-primary-light">
                <i className="text-primary material-icons md-person"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Customer</h6>
                <p className="mb-1">
                  {user?.name} <br /> {user?.email} <br /> +998 99 22123456
                </p>
                <a href="#">View profile</a>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="icontext align-items-start">
              <span className="icon icon-sm rounded-circle bg-primary-light">
                <i className="text-primary material-icons md-local_shipping"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Order info</h6>
                <p className="mb-1">
                  Shipping: Fargo express <br /> Pay method: card <br /> Status: new
                </p>
                <a href="#">Download info</a>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="icontext align-items-start">
              <span className="icon icon-sm rounded-circle bg-primary-light">
                <i className="text-primary material-icons md-place"></i>
              </span>
              <div className="text">
                <h6 className="mb-1">Deliver to</h6>
                <p className="mb-1">
                  City: Tashkent, Uzbekistan <br />Block A, House 123, Floor 2 <br /> Po Box 10000
                </p>
                <a href="#">View profile</a>
              </div>
            </article>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table border table-hover table-lg">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Product</th>
                    <th style={{ width: '20%' }}>Unit Price</th>
                    <th style={{ width: '20%' }}>Quantity</th>
                    <th style={{ width: '20%' }} className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map(item =>
                    <OrderItem key={item.id} item={item} />
                  )}

                  {/* Resumen */}
                  <tr>
                    <td colSpan={4}>
                      <article className="float-end">
                        <dl className="dlist">
                          <dt>Subtotal:</dt>
                          <dd>${items?.map(i => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0)}</dd>
                        </dl>
                        <dl className="dlist">
                          <dt>Shipping cost:</dt>
                          <dd>$10.00</dd>
                        </dl>
                        <dl className="dlist">
                          <dt>Grand total:</dt>
                          <dd> <b className="h5">$983.00</b> </dd>
                        </dl>
                        <dl className="dlist">
                          <dt className="text-muted">Status:</dt>
                          <dd>
                            <span className="badge rounded-pill alert-success text-success">Payment done</span>
                          </dd>
                        </dl>
                      </article>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box shadow-sm bg-light">
              <h6>Payment info</h6>
              <p>
                <Image src="images/card-brands/2.png" className="border" height="20" alt="" /> Master Card **** **** 4768 <br />
                Business name: Grand Market LLC <br />
                Phone: +1 (800) 555-154-52
              </p>
            </div>
            <div className="h-25 pt-4">
              <div className="mb-3">
                <label>Notes</label>
                <textarea className="form-control" name="notes" id="notes" placeholder="Type some note"></textarea>
              </div>
              <button className="btn btn-primary">Save note</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

type OrderItemProps = {
  item: OrderItem
}

const OrderItem = ({ item }: OrderItemProps) => {
  const { product, price, quantity } = item;

  return (
    <>
      <tr>
        <td>
          <Link href={`/products/${product.id}`} passHref>
            <a className="itemside">
              <div className="left">
                <Image src="images/items/1.jpg" width="40" height="40" className="img-xs" alt="Item" />
              </div>
              <div className="info"> {product.name} </div>
            </a>
          </Link>
        </td>
        <td> ${price} </td>
        <td> {quantity} </td>
        <td className="text-end"> ${price * quantity} </td>
      </tr>
    </>
  )
}

export default OrderDetails;
