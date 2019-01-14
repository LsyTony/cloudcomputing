const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
 
exports.handler = (event, context, callback) => {
    if(event.data !== undefined){
        event = event.data;
    }
    console.log("event:" + JSON.stringify(event));
    if(event.event_name === undefined){
        callback(null, {
                statusCode: '500',
                body      : "incorrect request"
            });
            return;
    }
     dynamodb.putItem({
        TableName: "cloudcompute-cw",
        Item: {
            "event_name": {
                S: event.event_name
            },
            "event_date": {
                S: event.event_date
            },
            "counter": {
                N: "0"
            },
            "event_address": {
                S: event.event_address
            },
            "event_capacity": {
                S: event.event_capacity
            },
            "event_description": {
                S: event.event_description
            },
        }
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                body: err
            });
        } else {
            callback(null, {
                statusCode: '200',
                body: 'ok added: ' + event.event_name + '!'
            });
        }
    })
};


