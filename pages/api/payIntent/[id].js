import Stripe from 'stripe';

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const idAmount = parseInt(id);

  const stripeConfig = new Stripe(process.env.NEXT_PRIVATE_STRIPE_KEY || '', {
    apiVersion: '2020-08-27',
  });

  const paymentIntent = await stripeConfig.paymentIntents.create({
    amount: idAmount,
    currency: 'GBP',
  });

  if (!paymentIntent) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found',
    });
  }
  res.json({ clientSecret: paymentIntent.client_secret });
};
