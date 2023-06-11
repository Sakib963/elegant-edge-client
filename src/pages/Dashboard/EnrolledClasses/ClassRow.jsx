const ClassRow = ({ singleClass, index }) => {
  const { name, image, instructor, email, price } = singleClass;
  return (
    <tr>
        <td>
            {index+1}
        </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Toy Photo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        {instructor}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>${price}</td>
    </tr>
  );
};

export default ClassRow;
