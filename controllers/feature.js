const Feature = require("../models/features");
const Plans = require("../models/plans");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    // const category = await new Category({ name, slug: slugify(name) }).save();
    // res.json(category);
    res.json(await new Feature({ name, slug: slugify(name) }).save());
  } catch (err) {
    res.status(400).send("Create Feature failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Feature.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
  const SingleFeature = await Feature.findOne({ slug: req.params.slug }).exec();
  try {
    const plans = await Plans.find({ features: SingleFeature })
      .populate("features")
      .exec();
    res.json({
      SingleFeature,
      plans,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Feature.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Feature update failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Feature.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Feature delete failed");
  }
};
