const Home = () => {
  return (
    <>
      <div className="container">
        <div className="title-box">
          <h3>Overview</h3>
          <select>
            <option value="">This Month</option>
            <option value="">This Week</option>
            <option value="">Today</option>
          </select>
        </div>
        <div className="cards">
          <div className="card active">
            <div className="card-body">
              <h6>Next Payout</h6>
              <h5>&#8377; 2,312.23</h5>
            </div>
            <div className="card-footer">
              <h6>
                Next Payment Date: <span>Today, 4:00PM</span>
              </h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6>Amount Pending</h6>
              <h5>&#8377; 92,312.20</h5>
            </div>
            <div className="card-footer">
              <h6>
                Total Orders: <span>13 Orders</span>
              </h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6>Amount Processed</h6>
              <h5>&#8377; 23,92,312</h5>
            </div>
            <div className="card-footer">
              <h6>
                Profit amount: <span>&#8377; 72,000</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="title-box">
          <h3>Transactions | This Month</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Refund Date</th>
              <th>Order Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#28924</td>
              <td>
                <span className="success"></span>
                Successful
              </td>
              <td>TRX789016</td>
              <td>Next Month, 1:00 PM</td>
              <td>₹1200.00</td>
            </tr>
            <tr>
              <td>#28925</td>
              <td>
                <span className="pending"></span>
                Pending
              </td>
              <td>TRX789017</td>
              <td>Today, 6:30 PM</td>
              <td>₹850.50</td>
            </tr>
            <tr>
              <td>#28926</td>
              <td>
                <span className="failure"></span>
                Failed
              </td>
              <td>TRX789018</td>
              <td>Tomorrow, 3:45 PM</td>
              <td>₹600.25</td>
            </tr>
            <tr>
              <td>#28927</td>
              <td>
                <span className="success"></span>
                Successful
              </td>
              <td>TRX789019</td>
              <td>Today, 8:15 PM</td>
              <td>₹950.75</td>
            </tr>
            <tr>
              <td>#28920</td>
              <td>
                <span className="success"></span>
                Successful
              </td>
              <td>TRX789012</td>
              <td>Tomorrow, 10:00 AM</td>
              <td>₹950.50</td>
            </tr>
            <tr>
              <td>#28921</td>
              <td>
                <span className="pending"></span>
                Pending
              </td>
              <td>TRX789013</td>
              <td>Today, 2:30 PM</td>
              <td>₹750.25</td>
            </tr>
            <tr>
              <td>#28922</td>
              <td>
                <span className="failure"></span>
                Failed
              </td>
              <td>TRX789014</td>
              <td>Next Week, 5:15 PM</td>
              <td>₹1200.75</td>
            </tr>
            <tr>
              <td>#28923</td>
              <td>
                <span className="success"></span>
                Successful
              </td>
              <td>TRX789015</td>
              <td>Today, 4:45 PM</td>
              <td>₹500.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
