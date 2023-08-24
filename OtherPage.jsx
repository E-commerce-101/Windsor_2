import React from 'react';
import MainLayout from '../layouts/MainLayout'
import {useParams} from 'react-router-dom'


const OtherPage = () => {
  const {prodId } = useParams ()

  return (
    <MainLayout>
            Other Page{prodId}
    </MainLayout>
  )
}

export default OtherPage
