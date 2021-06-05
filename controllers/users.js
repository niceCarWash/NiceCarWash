const User = require("../models/user");
const Order = require("../models/order");
const Plan = require("../models/plans");
const Service = require("../models/services");
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

exports.getUsers = async (req, res, next) => {
  total = await User.countDocuments();
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  res.set("X-Total-Count", 0 - 5 / total);
  User.find().exec((err, users) => {
    if (err) {
      const newError = new Error(err);
      next(newError);
    }
    res.json(users);
  });
};

async function main(
  planName,
  seviceName,
  name,
  countryName,
  cityName,
  locationAddress,
  phoneAddress,
  senderEmail
) {
  console.log(senderEmail, seviceName, "================");
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "fullstackdeveloper80@gmail.com",
        pass: "Node.Linux@MongoDB2021",
      },
    });
    let info = await transporter
      .sendMail({
        from: senderEmail,
        to: "info@nicecarwash.se",
        subject: `Order for ${seviceName} and ${planName}`, // Subject line
        text: "", // plain text body
        html: `<p> 
      Hello Nice Car Wash my name is <h4>${name}</h4>, I'm requesting service <h4>${seviceName}</h4> in plan ${planName}. <br />
      I live in ${locationAddress}, in ${cityName}, ${countryName}. <br />
      Please contact me through my email ${senderEmail} and phone number ${phoneAddress}
      
      Thanks Nice Car Wash
      </p>`, // html body
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    const newError = new Error(error);
    throw newError;
  }
}

async function contact(name, email, message) {
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "fullstackdeveloper80@gmail.com",
        pass: "Node.Linux@MongoDB2021",
      },
    });
    let info = await transporter
      .sendMail({
        from: email,
        to: "info@nicecarwash.se",
        subject: `Contact from ${name} with contact email ${email}`, // Subject line
        text: "", // plain text body
        html: `<p> ${message}
      </p>`, // html body
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        const newError = new Error(error);
        throw newError;
      });
  } catch (error) {
    const newError = new Error(error);
    throw newError;
  }
}

exports.createOrder = async (req, res, next) => {
  const { plan, service, fullName, country, city, address, email, phone } =
    req.body.order;
  const { user_id } = req.body;
  console.log(req.body.order);
  try {
    const newOrder = await new Order({
      orderPlan: plan,
      orderService: service,
      orderUser: user_id,
    }).save();
    const planData = await Plan.findOne({ _id: plan });
    const serviceData = await Service.findOne({ _id: service });
    main(
      planData.planTitle,
      serviceData.service,
      fullName,
      country,
      city,
      address,
      phone,
      email
    );
    console.log(newOrder);
  } catch (error) {
    console.log(error);
    const newError = new Error(error);
    next(newError);
  }
};

exports.contact = async (req, res, next) => {
  const { name, email, message } = req.body;
  console.log(req.body);
  try {
    const newContact = await new Contact({
      name,
      email,
      message,
    }).save();
    contact(name, email, message);
    console.log(newContact);
  } catch (error) {
    const newError = new Error(error);
    next(newError);
    console.log(error);
  }
};

exports.listOrder = async (req, res, next) => {
  try {
    const id = req.params.id.replace(":", "");
    const orders = await Order.find({ orderUser: id })
      .sort({ createdAt: -1 })
      .exec();
    const { orderPlan, orderService } = orders;
    const plans = await Plan.find({ _id: orderPlan })
      .sort({ createdAt: -1 })
      .exec();
    const services = await Service.find({ _id: orderService })
      .sort({ createdAt: -1 })
      .exec();
    const { planTitle } = plans;
    const { service } = services;
    console.log(planTitle, service);
  } catch (error) {
    const newError = new Error(error);
    next(newError);
  }
};
