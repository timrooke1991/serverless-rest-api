'use strict';

module.exports.createTodo = async (event, context) => {
  const body = JSON.parse(event.body);

  const mockDB = `${body.todo} is saved to the DB`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: mockDB
    })
  };
};
