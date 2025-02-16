require("dotenv").config(); // Load .env variables

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Load Stripe Secret Key

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    try {
        // Ensure amount is a number (Stripe requires amount in paise, not rupees)
        const amount = Number(req.body.amount);

        if (!amount || amount <= 0) {
            return res.status(400).json({ success: false, message: "Invalid amount" });
        }

        const myPayment = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert INR to paise (₹1 = 100 paise)
            currency: "inr",
            description: "ShopKart Payment",
            metadata: {
                company: "ShopKart"
            }
        });

        res.status(200).json({
            success: true,
            client_secret: myPayment.client_secret
        });

    } catch (error) {
        console.error("Stripe Payment Error:", error.message);
        res.status(500).json({ success: false, message: "Payment processing failed", error: error.message });
    }
});

// Send Stripe Publishable Key to Frontend
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_PUBLISHABLE_KEY // Use correct variable name
    });
});


