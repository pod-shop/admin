import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let chart: Chart;
    if (typeof document !== undefined) {
      const ctx = canvas?.current?.getContext('2d');

      if (ctx) {
        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Sales',
                backgroundColor: 'rgb(44, 120, 220)',
                borderColor: 'rgb(44, 120, 220)',
                data: [18, 17, 4, 3, 2, 20, 25, 31, 25, 22, 20, 9]
              },
              {
                label: 'Visitors',
                backgroundColor: 'rgb(180, 200, 230)',
                borderColor: 'rgb(180, 200, 230)',
                data: [40, 20, 17, 9, 23, 35, 39, 30, 34, 25, 27, 17]
              }

            ]
          },
          options: {}
        });
      }
    }

    return () => {
      chart?.destroy();
    }
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card card-body mb-4">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-primary-light"><i
                className="text-primary material-icons md-monetization_on"></i></span>
              <div className="text">
                <h6 className="mb-1">Total Sales</h6> <span>$19,626,058.20</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-body mb-4">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-success-light"><i
                className="text-success material-icons md-local_shipping"></i></span>
              <div className="text">
                <h6 className="mb-1">Total Orders</h6> <span>87790</span>
              </div>
            </article>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-body mb-4">
            <article className="icontext">
              <span className="icon icon-sm rounded-circle bg-warning-light"><i
                className="text-warning material-icons md-shopping_basket"></i></span>
              <div className="text">
                <h6 className="mb-1">Total Products</h6> <span>5678</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8 col-lg-12">
          <div className="card mb-4">
            <article className="card-body">
              <h5 className="card-title">Sale statistics</h5>
              <canvas height="120" id="myChart" ref={canvas}></canvas>
            </article>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12">
          <div className="card mb-4">
            <article className="card-body">

              <h5 className="card-title">Marketing</h5>

              <span className="text-muted">Facebook page</span>
              <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '15%' }}>15%</div>
              </div>

              <span className="text-muted">Instagram page</span>
              <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '65%' }}>65%
                </div>
              </div>

              <span className="text-muted">Google search</span>
              <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '51%' }}> 51%
                </div>
              </div>

              <span className="text-muted">Other links</span>
              <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{ width: '80%' }}> 80%
                </div>
              </div>
              <br />
              <a href="#" className="btn btn-light">Open analytics <i className="material-icons md-open_in_new"></i> </a>
            </article>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Latest orders</h5>
          <div className="table-responsive">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td>2323</td>
                  <td><b>Devon Lane</b></td>
                  <td>devon@example.com</td>
                  <td>$778.35</td>
                  <td><span className="badge rounded-pill alert-success">Delivered</span></td>
                  <td>07.05.2020</td>
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
                <tr>
                  <td>2323</td>
                  <td><b>Darrell Steward</b></td>
                  <td>stew123@mysite.com</td>
                  <td>$980.90</td>
                  <td><span className="badge rounded-pill alert-warning">Pending</span></td>
                  <td>12.02.2020</td>
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
                <tr>
                  <td>9053</td>
                  <td><b>Mike Jonatan</b></td>
                  <td>mike@somename.com</td>
                  <td>$778.35</td>
                  <td><span className="badge rounded-pill alert-warning">Pending</span></td>
                  <td>07.05.2020</td>
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
                <tr>
                  <td>1234</td>
                  <td><b>Ahmed Hassan</b></td>
                  <td>devon@example.com</td>
                  <td>$75.30</td>
                  <td><span className="badge rounded-pill alert-danger">Cancelled</span></td>
                  <td>02.01.2020</td>
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
                <tr>
                  <td>7532</td>
                  <td><b>Abdul Mohammad</b></td>
                  <td>abdu@example.com</td>
                  <td>$190.15</td>
                  <td><span className="badge rounded-pill alert-success">Delivered</span></td>
                  <td>17.02.2020</td>
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
                <tr>
                  <td>2323</td>
                  <td><b>Devon Lane</b></td>
                  <td>devon@example.com</td>
                  <td>$778.35</td>
                  <td><span className="badge rounded-pill alert-success">Delivered</span></td>
                  <td>07.05.2020</td>
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
                <tr>
                  <td>4521</td>
                  <td><b>Alex Pushkin</b></td>
                  <td>myphkin@company.com</td>
                  <td>$708.35</td>
                  <td><span className="badge rounded-pill alert-success">Delivered</span></td>
                  <td>01.05.2019</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
