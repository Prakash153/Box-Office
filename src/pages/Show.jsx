import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  useEffect(() => {
    apiGet(`/show/${id}?embed[]=season&embed[]=cast`).then(results => {});
  }, [id]);
  return <div>Show page</div>;
};

export default Show;
