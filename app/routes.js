//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/v8/procurement-operations/prepare-and-go-to-market.js')(router);
require('./routes/v8/procurement-operations/timeline.js')(router);
require('./routes/v8/procurement-operations/approach-to-market.js')(router);
require('./routes/v8/school-buyers/sign-in.js')(router);
require('./routes/v8/school-buyers/approach-to-market.js')(router);
require('./routes/v8/common/change-due-date.js')(router);
require('./routes/v8/common/upload-document.js')(router);
require('./routes/v8/common/procurement.js')(router);

require('./routes/v7/procurement-operations/prepare-and-go-to-market.js')(router);
require('./routes/v7/procurement-operations/timeline.js')(router);
require('./routes/v7/procurement-operations/approach-to-market.js')(router);
require('./routes/v7/school-buyers/sign-in.js')(router);
require('./routes/v7/school-buyers/approach-to-market.js')(router);
require('./routes/v7/common/change-due-date.js')(router);
require('./routes/v7/common/upload-document.js')(router);
require('./routes/v7/common/procurement.js')(router);

require('./routes/v6/procurement-operations/prepare-and-go-to-market.js')(router);
require('./routes/v6/procurement-operations/timeline.js')(router);
require('./routes/v6/procurement-operations/approach-to-market.js')(router);
require('./routes/v6/school-buyers/sign-in.js')(router);
require('./routes/v6/school-buyers/approach-to-market.js')(router);
require('./routes/v6/common/change-due-date.js')(router);
require('./routes/v6/common/upload-document.js')(router);
require('./routes/v6/common/procurement.js')(router);

require('./routes/v5/procurement-operations/timeline.js')(router);
require('./routes/v5/procurement-operations/approach-to-market.js')(router);
require('./routes/v5/school-buyers/sign-in.js')(router);
require('./routes/v5/school-buyers/approach-to-market.js')(router);
require('./routes/v5/common/change-due-date.js')(router);
require('./routes/v5/common/upload-document.js')(router);
require('./routes/v5/common/procurement.js')(router);

require('./routes/v4/procurement-operations/approach-to-market.js')(router);
require('./routes/v4/school-buyers/sign-in.js')(router);
require('./routes/v4/school-buyers/approach-to-market.js')(router);
require('./routes/v4/common/change-due-date.js')(router);
require('./routes/v4/common/upload-document.js')(router);
require('./routes/v4/common/procurement.js')(router);

require('./routes/v3/procurement-operations/approach-to-market.js')(router);
require('./routes/v3/school-buyers/sign-in.js')(router);
require('./routes/v3/school-buyers/approach-to-market.js')(router);
require('./routes/v3/common/upload-document.js')(router);
require('./routes/v3/common/procurement.js')(router);

require('./routes/v2/procurement-operations/approach-to-market.js')(router);
require('./routes/v2/school-buyers/approach-to-market.js')(router);
require('./routes/v2/common/upload-document.js')(router);
require('./routes/v2/common/procurement.js')(router);

require('./routes/v1/procurement-operations/approach-to-market.js')(router);
require('./routes/v1/school-buyers/approach-to-market.js')(router);
require('./routes/v1/common/upload-document.js')(router);

