const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, channel) {
    let queue = 'task_queue';

    channel.consume(queue, function(msg) {
      let secs = msg.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg.content.toString());

      setTimeout(function() {
        console.log(" [X] Done");
      }, secs * 1000);
    }, {noAck: true})
  });
});