const Service = require("../models/services");
const slugify = require("slugify");
exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.title);
    const newService = await new Service(req.body).save();
    res.send(newService);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.listAll = async (req, res) => {
  let services = await Service.find({})
    .limit(parseInt(req.params.count))
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(services);
};

exports.read = async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug }).exec();
  res.json(service);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Service.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Service delete failed");
  }
};

exports.update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Service.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("Service UPDATE ERROR ----> ", err);
    // return res.status(400).send("Product update failed");
    res.status(400).json({
      err: err.message,
    });
  }
};
