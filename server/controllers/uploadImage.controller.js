// controllers/uploadImageController.js

import uploadImageClodinary from "../utils/uploadImageClodinary.js";

const uploadImageController = async (req, res) => {
  try {
    const files = req.files;              // ← now an array
    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "No images uploaded",
        success: false,
        error: true
      });
    }

    // upload all in parallel
    const uploadResults = await Promise.all(
      files.map(file => uploadImageClodinary(file))
    );

    res.json({
      message: "All uploads done",
      data: uploadResults,               // array of Cloudinary responses
      success: true,
      error: false
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      success: false,
      error: true
    });
  }
};

export default uploadImageController;
