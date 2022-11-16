import Image from "next/image";
import moment from "moment";
import { Review, Reviews } from "@/types/index";

type ReviewsProps = {
  reviews: Reviews
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
              </th>
              <th>ID</th>
              <th>Product</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Date</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <Review key={r.id ?? i} review={r} />
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

type ReviewProps = {
  review: Review
}

const Review = ({ review }: ReviewProps) => {
  const { id, rating, createdAt, product, user } = review;

  return (
    <>
      <tr>
        <td>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
        </td>
        <td>{id}</td>
        <td><b>{product?.name}</b></td>
        <td>{user?.name}</td>
        <td>
          <ul className="rating-stars">
            <li style={{ width: '60%' }} className="stars-active">
              <Image
                src="/images/icons/stars-active.svg"
                width="85"
                height="16"
                alt="stars"
              />
            </li>
            <li>
              <Image
                src="/images/icons/starts-disable.svg"
                width="85"
                height="16"
                alt="stars"
              />
            </li>
          </ul>
        </td>
        <td>{moment(createdAt).format('DD MMM YYYY')}</td>
        <td className="text-end">
          <a href="#" className="btn btn-light">Detail</a>
          <div className="dropdown">
            <a href="#" data-bs-toggle="dropdown" className="btn btn-light"> <i
              className="material-icons md-more_horiz"></i> </a>
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

export default Reviews;
