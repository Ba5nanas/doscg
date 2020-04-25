// Create Routers
var router = require("./routers.js");
// Open Port 8080
router.listen(8000, () => console.log('server run listening on port 8000'));