import Head from 'next/head'
import React from 'react';
import Form from "../components/Form";
import Hero from "../components/Hero";

class Home extends React.Component{

  static async getInitialProps(ctx){
    const res = await fetch("https://infra.devskills.app/api/transaction-management/transactions")
    const trans_data = await res.json()
    return {data: trans_data}
  }

  render(){
    return (
      <div className="container">
        <h2 className="Display-1 my-3">Account Management</h2>
        <div className="row">
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-8">
            <Hero data={this.props.data} />
          </div>
        </div>
      </div>
    )
  }
}


export default Home
