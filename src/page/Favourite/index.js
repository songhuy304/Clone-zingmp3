import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/context/AuthContext';
import { toast } from 'react-toastify';

function Favorite() {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // fake loadingpage to take data user from profile
    if (user) {
        
    } else {
        navigate('..');
        toast.info('Vui lòng đăng nhập để sử dụng chức năng này!');
    }
}, []);
  return (
    <div>Favorite</div>
  )
}

export default Favorite