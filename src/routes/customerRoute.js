const stripe = require('stripe')('put your stripe key');


export default (router) => {
    router.get(`/hello`,(req, res) => {
        res.send('Hello World!')
    });

    //creat customer
    router.post(`/api/customer`, async (req , res) => {
        try {
            const customer = await stripe.customers.create({
                name:req.body.name,
                email: req.body.email,
                description: req.body.description,   
            })
            res.send(customer)
        } catch (error) {
            res.send(error)
        }
    } );

    //create product

    router.post(`/api/product`, async (req , res) => {
        try {
            const product = await stripe.products.create({
                name:req.body.name,
                description: req.body.description,   
            })
            res.send(product)
        } catch (error) {
            res.send(error)
        }
    } );

    //create plan

    router.post(`/api/plan`, async (req , res) => {
        try {
            const plan = await stripe.plans.create({
                amount: req.body.amount,
                currency: req.body.currency,
                interval: req.body.interval,
                product: req.body.product, 
            })
            res.send(plan)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    } );

    //create card
    router.post(`/api/card`, async (req , res) => {
        try {
            const card = await stripe.customers.createSource(
                req.body.customerid,
                {source: req.body.token}
            )
            res.send(card)
        } catch (error) {
            console.log(error)
            res.send(error)
        }


    } );

    //create subscription

    router.post(`/api/subscription`, async (req , res) => {
        try {
            const subscription = await stripe.subscriptions.create({
                customer: req.body.customer,
                items: [
                    { price: req.body.planid },
                ],
             });
            res.send(subscription)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    } );


    router.post(`/api/invoice`, async (req , res) => {
        try {
            const invoice = await stripe.invoices.create({
                customer:req.body.customer,
              });
            res.send(invoice)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    } );
    
};







