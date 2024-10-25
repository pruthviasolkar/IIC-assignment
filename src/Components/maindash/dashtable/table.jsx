import Table from 'react-bootstrap/Table';
import "../dashtable/table.css"; // Import your custom CSS file

function Tabledash() {
  // Table data and headings
  const tableHeadings = ['#', 'USERNAME', 'DATE', 'EMAIL', 'SOURCE', 'TYPE', 'TAGS'];
  const tableData = [
    {
      id: 1,
      username: 'John Doe',
      image: '/Assets/person2.png',
      date: '01 Feb, 2024',
      email: 'john@example.com',
      source: 'Referral',
      type: 'New',
      tags: ['Sales', 'Product ',"Customer", "Interested"]
    },
    {
      id: 2,
      username: 'Jane Smith',
      image: '/Assets/Elipse 5.png',
      date: '31 Jan, 2024',
      email: 'jane@example.com',
      source: 'Direct',
      type: 'Returning',
      tags: ['Sales', 'Product ',"Customer", "Interested"]
    },
    {
      id: 3,
      username: 'Sam Wilson',
      image: '/Assets/person2.png',
      date: '31 Jan, 2024',
      email: 'sam@example.com',
      source: 'Ad Campaign',
      type: 'New',
      tags: ['Sales', 'Product ',"Customer", "Interested"]
    },
    {
        id: 4,
        username: 'Sam Wilson',
        image: '/Assets/Elipse 5.png',
        date: '31 Jan, 2024',
        email: 'sam@example.com',
        source: 'Ad Campaign',
        type: 'New',
        tags: ['Sales', 'Product ',"Customer", "Interested"]
      },
  ];

  return (
    <Table responsive className="custom-table"> {/* Add custom class here */}
      <thead>
          <tr >
          {tableHeadings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
       
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.id}</td>
            <td>
              <div className="user-info">
                <img src={row.image} alt={`${row.username}'s profile`} className="profile-img" />
                <span>{row.username}</span>
              </div>
            </td>
            <td>{row.date}</td>
            <td>{row.email}</td>
            <td>{row.source}</td>
            <td>{row.type}</td>
            <td>
              {row.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}{tagIndex < row.tags.length - 1 && ', '}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tabledash;
