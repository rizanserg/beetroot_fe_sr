import React from 'react';
import '../assets/scss/NotFound.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 not found</h1>
      <Button size="small" variant="outlined" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export { NotFound as Component };
export default NotFound;
