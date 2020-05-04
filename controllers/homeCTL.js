exports.home = (req, res) => {
    return res.status(200).json({
        message: "home GET sucess"
    });
};
exports.homePOST = (req, res) => {
    return res.status(200).json({
        message: "home POST sucess"
    });
};