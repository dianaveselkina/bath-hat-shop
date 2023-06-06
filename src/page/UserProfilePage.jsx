import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './page.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../components/Store/Slices/userSlice';

export const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.user);
  console.log({ data });
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <div className="user__conteiner">
        <Link to="/">
          <button className="button__main">На главную</button>
        </Link>
        {loading ? (
          'loading'
        ) : (
          <div>
            <img className="profile__avatar" src={data?.avatar} alt="avatar" />
            {/* <p className="user__info">{data?.name}</p>
            <p>{data?.about}</p>
            <p>{data?.email}</p> */}
          </div>
        )}
      </div>
    </>
  );
};
