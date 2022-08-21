import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
        <div className="item">
            <div className="container">
                <div className="row">
                    <div className="col-3 card px-1" >
                        <img src="../img/img1.jpg" className="card-img-top" alt="" />
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <h5 className="card-title">Fresh new layout</h5>
                            <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                        <div className="card-footer"><a href="#" className="btn btn-primary text-center">Find Out More!</a></div>
                    </div>
                    <div className="col-3 card px-1" >
                        <img src="../img/img2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <h5 className="card-title">Free to download</h5>
                            <p className="card-text">Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                        <div className="card-footer"><a href="#" className="btn btn-primary text-center">Find Out More!</a></div>
                    </div>
                    <div className="col-3 card px-1" >
                        <img src="../img/img1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <h5 className="card-title">Free to download</h5>
                            <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                        <div className="card-footer"><a href="#" className="btn btn-primary text-center">Find Out More!</a></div>
                    </div>
                    <div className="col-3 card px-1" >
                        <img src="../img/img2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <h5 className="card-title">Feature boxes</h5>
                            <p className="card-text">Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                        <div className="card-footer"><a href="#" className="btn btn-primary text-center">Find Out More!</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
