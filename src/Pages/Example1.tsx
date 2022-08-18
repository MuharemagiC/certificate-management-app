import Table from '../Components/Table'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Example1 = () => (
  <div>
    <section style={{ marginBottom: '10px' }}>
      <Link to="new" style={{ textDecoration: 'none' }}>
        <Button variant="outlined">New Certificate</Button>
      </Link>
    </section>
    <Table />
  </div>
)

export default Example1
