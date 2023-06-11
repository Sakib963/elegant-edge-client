import moment from "moment/moment";

const PaidClassRow = ({ singleClass, index }) => {
  const { courseName, transactionId, price, date } = singleClass;
  const formattedDateTime = moment(date).format('DD-MM-YYYY hh:mmA');
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="font-bold">{courseName}</div>
      </td>
      <td>{transactionId}</td>
      <td>${price}</td>
      <td>{formattedDateTime}</td>
    </tr>
  );
};

export default PaidClassRow;
