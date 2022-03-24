import { useRouter } from 'next/router';

export default function Form(){

    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const submitAmount = async (event) => {
        event.preventDefault();
        const account = event.target.account.value;
        const amount = event.target.amount.value;
        const res = await fetch('https://infra.devskills.app/api/transaction-management/transactions', {
          body: JSON.stringify({
            account_id: account,
            amount: amount
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });

        if (res.status < 300) {
          refreshData();
        }
    }
    
    return (
        <form onSubmit={submitAmount}>
            <label for="amount" class="form-label">Amount</label>
            <input type="text" class="form-control" id="amount" name="amount" required/>

            <label for="account" class="form-label">Account ID</label>
            <input type="text" class="form-control" id="account" name="account" required/>

            <button class="btn btn-success btn-fluid mt-3">Submit</button>
        </form>
    )
}