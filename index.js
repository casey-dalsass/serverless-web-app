const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "CustomerDetails";

exports.handler = (event, context, callback) => {
  var params = {
    TableName: tableName,
    Key: {
      EmailID: event.EmailID,
    },
  };
  docClient.get(params, function (err, data) {
    callback(err, data);
  });
};
