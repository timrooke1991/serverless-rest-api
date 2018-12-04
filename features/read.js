'use strict';

module.exports.getTodo = async (event, context) => {
  const message = 'Make dinner';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: message
    })
  };
};
