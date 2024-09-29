import Table from 'react-bootstrap/Table';
import './TopTable-styles.css'

function TopTable() {
  return (
    <Table striped>
      <thead>
        <tr className='metaData'>
          <th>S.No</th>
          <th>Patient Name</th>
          <th>Type of Scan</th>
          <th>Most Recent Visit</th>
          <th>Scheduled Visit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>Impractial Joker</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TopTable;