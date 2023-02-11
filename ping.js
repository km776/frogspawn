function ping() {
  if (message.content.startsWith("!ping")) {
    message.channel.send("pong!");
  } 
}

module.exports = {ping}