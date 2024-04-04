import React from 'react'
import './Layout.css'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <>
      <div>
        <div className='col-lg-2'>
          <header >
            {/* <!-- Sidebar --> */}
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
              <div className="position-sticky">
                <div className="list-group list-group-flush ">
                  <Link to={"/admin/dashboard"}
                    className="list-group-item list-group-item-action py-2 ripple" >

                    <i className="fas fa-tachometer-alt fa-fw me-2 mr-2"></i><span>Main dashboard</span>
                  </Link>

                  <Link to={"/admin/products"} className="list-group-item list-group-item-action py-2 ripple">
                    <i className="fa-solid fa-cart-shopping  me-2"></i><span>Products</span>
                  </Link >


                  <Link to={"/admin/salestable"} href="#" className="list-group-item list-group-item-action py-2 ripple"
                  ><i className="fa-solid fa-bag-shopping me-2 mr-2"></i><span>Sales Table</span>
                  </ Link>
                  <Link to={"/admin/expencedata"} href="#" className="list-group-item list-group-item-action py-2 ripple">
                    <i className="fa-solid fa-wallet me-2 mr-2"></i><span>Sale Expense Table</span>
                  </Link>
                  <Link to={"/logout"} className="list-group-item list-group-item-action py-2 ripple"
                  ><i className="fa-solid fa-right-from-bracket me-3 mr-2"></i><span>Logout</span>
                  </Link>

                </div>
              </div>
            </nav>
            {/* <!-- Sidebar --> */}

            {/* <!-- Navbar --> */}
           
            {/* <!-- Navbar --> */}
          </header>
        </div>


        <div className='col-lg-12'>
          <Outlet />

        </div>
      </div>
    </>
  )
}
