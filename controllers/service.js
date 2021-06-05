const Service = require('../models/services');

exports.create = async (req, res) => {
  try {
    const { service, price } = req.body;
    const newService = await new Service({
      service,
      price,
    }).save();
    res.send(newService);
  } catch (err) {
    console.log(err);
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  }
};

exports.list = async (req, res) => {
  try {
    total = await Service.countDocuments();
    res.header('content-range', `Plan 0-10}/${total}`);
    res.json(await Service.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    const newError = new Error(error)
    newError.status = 400
    next(newError)
  }
 
};
exports.read = async (req, res) => {
  try {
    let service = await Service.findOne({ _id: req.params.id }).exec();
    res.json(service);
    
  } catch (error) {
    const newError = new Error(error)
    newError.status = 400
    next(newError)
  }
 
};

exports.update = async (req, res, next) => {
  const { service, price } = req.body;
  const { id } = req.params;
  try {
    const updated = await Service.findOneAndUpdate(
      { _id: id },
      { service, price },
      { upsert: true }
    );
    res.json({ data: updated });
  } catch (err) {
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Service.findOneAndDelete({
      _id: req.params.id,
    });
    console.log(deleted);
    res.send(deleted);
  } catch (err) {
    const newError = new Error(err)
    newError.status = 400
    next(newError)
  }
};
