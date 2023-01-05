import Stripe from 'stripe';

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const stripeConfig = new Stripe(process.env.NEXT_PRIVATE_STRIPE_KEY || '', {
    apiVersion: '2020-08-27',
  });

  const accountLink = await stripeConfig.accountLinks.create({
    account: id,
    refresh_url: 'https://indiebubba.com/account',
    return_url: 'https://indiebubba.com/account',
    type: 'account_onboarding',
  });

  if (!accountLink) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found',
    });
  }

  res.json({ accountLink });
};
