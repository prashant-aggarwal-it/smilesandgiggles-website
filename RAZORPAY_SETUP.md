# Razorpay Donations Button Setup

The Donate page uses Razorpay's hosted Donations / Payment Button embed rather than a custom payment API.

## 1. Create the donation button

In the Razorpay Dashboard, create/configure a Donations or Payment Button. Set the donation amount options and the donor information fields you want Razorpay to collect.

## 2. Copy the Payment Button ID

Razorpay's generated embed contains a value similar to:

```html
data-payment_button_id="pl_XXXXXXXXXXXXXX"
```

You only need the `pl_...` value in this project.

## 3. Add it to `.env.local`

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_RAZORPAY_PAYMENT_BUTTON_ID=pl_XXXXXXXXXXXXXX
```

Then restart the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000/donate
```

## 4. Test before going live

Use the Razorpay button/configuration intended for testing first. When your Razorpay account and live donation button are ready, replace the environment value with the Live Payment Button ID and redeploy.

## Security

This embed does **not** require `RAZORPAY_KEY_SECRET` in the website.

Do not add Razorpay secret keys to this project for the Payment Button approach. The website simply loads Razorpay's hosted payment-button script with the configured public Payment Button ID.

## 80G receipts

Configure the donor fields you need through Razorpay and keep the public website focused on the donation experience. If additional statutory information is required for an 80G receipt, collect only what is actually needed and handle it through your Foundation's receipt workflow.

## If we need more automation later

A custom Razorpay Orders API/webhook integration can be added later if you need automated reconciliation, a custom donor database, automated receipts or a highly customised checkout. It is intentionally not included in the current website because the hosted Donations Button is sufficient for the current requirement.
