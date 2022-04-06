const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/customer', async (req, res) => {
    try {
        const customer = await stripe.customers.create({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
    
        });
        res.send(customer)
    } catch (error) {
        res.send(err)
        
    }
})
//customerid == cus_LSNWQmwYQsu6iN


app.post('/product', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: req.body.name,
            description: req.body.description,
    
        });
        res.send(product)
    } catch (error) {
        res.send(err)
        
    }
})
//product id == prod_LSNbbstRyGIhiv

app.post('/plan', async (req, res) => {
    try {
        const plan = await stripe.plans.create({
            amount: req.body.amount,
            currency: req.body.currency,
            interval: req.body.interval,
            product: req.body.productid,
        });
        res.send(plan)
    } catch (error) {
        res.send(err)
        
    }
})
//plan id == plan_LSNirq1W8PWDy7



app.post('/card', async (req, res) => {
    try {
        const card = await stripe.customers.createSource(
            req.body.customerid,
            {source: req.body.token}
          );
        res.send(card)
    } catch (error) {
        res.send(err)
        
    }
})
//card id == card_1KlT4gB98YvBhyuIDZGIv0TV


app.post('/subscription', async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.create({
            customer: req.body.customerid,
            items: [
                { price: req.body.planid },
            ],
        });
        res.send(subscription)
    } catch (error) {
        res.send(err)
        
    }
})
//sub id == sub_1KlT6AB98YvBhyuIXkkFwVIi




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})