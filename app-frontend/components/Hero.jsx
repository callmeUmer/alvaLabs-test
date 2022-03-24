function Hero({data}) {
  
  const checkAmount = (amount) => {
    return amount > 0 ? "bg-success": "bg-danger"
  }
  
  return (
    <>
      {data.map((trans) => {
        const cls = `card mb-4 ${checkAmount(trans.amount)}`
        return (
          <div class={cls}>
            <div class="card-body">
              <h5 class="card-title">${trans.amount}</h5>
              <p class="card-text">Account ID: {trans.account_id}</p>
            </div>
          </div>
      )
    })}
    </>
  )
}


export default Hero;
