//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/v1/procurement-operations/approach-to-market.js')(router);
require('./routes/v1/school-buyers/approach-to-market.js')(router);
require('./routes/v1/common/upload-document.js')(router);
