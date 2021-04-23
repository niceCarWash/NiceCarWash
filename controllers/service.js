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
    res.status(400).send('Create Service failed');
  }
};

exports.list = async (req, res) => {
  total = await Service.countDocuments();
  res.header('content-range', `Plan 0-10}/${total}`);
  res.json(await Service.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async (req, res) => {
  let service = await Service.findOne({ _id: req.params.id }).exec();
  res.json(service);
};

exports.update = async (req, res) => {
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
    res.status(400).send('Service update failed');
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
    res.status(400).send('Service delete failed');
  }
};
