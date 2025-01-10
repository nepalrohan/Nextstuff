import React from 'react'
import AdminLayout from '@/components/AdminLayout'
const Layout = ({children}) => {
  return (
   <AdminLayout>
{children}
   </AdminLayout>
  )
}

export default Layout