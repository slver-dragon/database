const Router = require("express");
const { json } = require("express/lib/response");
const router = new Router();

router.get("", async (req, res) => {
  if (response.error) {
    res.status(500).json(response.error || new Error("UC uncertain error"));
    return;
  }
  res.status(200).json(response.value);
});

router.post("", async (req, res) => {
  [response.error, added] = response.value.some((element) => {
    return req.body.id === element.id;
  })
    ? ["id error", null]
    : ["", { id: req.body.id, name: req.body.name, side: req.body.side }];
  if (added) response.value.push(added);
  if (response.error) {
    res.status(500).json(response.error || new Error("UC uncertain error"));
    return;
  }
  res.status(200).json(response.value);
});

module.exports = router;
