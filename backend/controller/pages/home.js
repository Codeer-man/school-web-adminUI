const { Banner, PrincipalMessage } = require("../../models/pages/home");

exports.createBanner = async (req, res) => {
  try {
    const { title, content, imgUrl } = req.body;
    const newBanner = new Banner({ title, content, imgUrl });
    await newBanner.save();
    res.status(201).json({ data: newBanner, message: "Success!" });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log("Invalid server error", error);
  }
};

exports.getBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banners = await Banner.find({ _id: id });
    res.status(200).json({ data: banners });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log("Error fetching banners:", error);
  }
};

exports.updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    // const { title, subtitle, content, imageUrl } = req.body;

    const existingBanner = await Banner.findById(id);

    const updateData = {
      title:
        req.body.title?.trim() !== "" ? req.body.title : existingBanner.title,
      content:
        req.body.content?.trim() !== ""
          ? req.body.content
          : existingBanner.content,
    };

    const updatedBanner = await Banner.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedBanner) {
      return res.status(404).json({ error: "Banner not found" });
    }
    res.status(200).json(updatedBanner);
  } catch (error) {
    console.error("Error updating banner:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updatePrincipalMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const existingMessage = await PrincipalMessage.findById(id);
    if (!existingMessage) {
      return res.status(404).json({ error: "Principal message not found" });
    }

    const updatedData = {
      messageTitle:
        req.body.messageTitle?.trim() !== ""
          ? req.body.messageTitle
          : existingMessage.messageTitle,
      messageContent:
        req.body.messageContent?.trim() !== ""
          ? req.body.messageContent
          : existingMessage.messageContent,
      principalName:
        req.body.principalName?.trim() !== ""
          ? req.body.principalName
          : existingMessage.principalName,
      principalDesignation:
        req.body.principalDesignation?.trim() !== ""
          ? req.body.principalDesignation
          : existingMessage.principalDesignation,
    };

    const updatedMessage = await PrincipalMessage.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error("Error updating principal message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
