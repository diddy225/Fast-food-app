const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, channel) {
    let queue = 'hello';

    channel.assertQueue(queue, {durable: false});

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
      console.log(" [x] Received %s", msg.content.toJSON())
    }, {
      noAck: true
    });
  });
});