#!/usr/bin/env node
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    
    function sendInit() {
	var msginit = {
		type: "connection_init",
		payload: {}
	};
var msg1 = {
	"id": "1",
	"type": "start",
	"payload": {
		"variables": {},
		"extensions": {},
		"operationName": null,
		"query": "subscription {\n  systemStatusChanged {\n    status\n    __typename\n  }\n}\n"
	}
};

var msg2 = {
	"id": "2",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "VN30"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};


var msg3 = {
	"id": "3",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "VN30"
		},
		"extensions": {},
		"operationName": "notifyIndexChart",
		"query": "subscription notifyIndexChart($indexId: String!) {\n  notifyIndexChart(indexId: $indexId) {\n    indexID\n    data\n    __typename\n  }\n}\n"
	}
};

var msg4 = {
	"id": "4",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "VN30"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    indexID\n    totalQtty\n    allQty\n    allValue\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg5 = {
	"id": "5",
	"type": "start",
	"payload": {
		"variables": {
			"market": "hose"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($market: String!) {\n  notifySession(market: $market) {\n    session\n    __typename\n  }\n}\n"
	}
};

var msg6 = {
	"id": "6",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNX30"
		},
		"extensions": {},
		"operationName": "notifyIndexChart",
		"query": "subscription notifyIndexChart($indexId: String!) {\n  notifyIndexChart(indexId: $indexId) {\n    indexID\n    data\n    __typename\n  }\n}\n"
	}
};

        if (connection.connected) {
			console.log('Sending init' + JSON.stringify(msginit));
			connection.send(JSON.stringify(msginit));
			console.log('Sending sub' + JSON.stringify(msg1));
			connection.send(JSON.stringify(msg1));
			console.log('Sending sub' + JSON.stringify(msg2));
			connection.send(JSON.stringify(msg2));			
			console.log('Sending sub' + JSON.stringify(msg3));
			connection.send(JSON.stringify(msg3));			
			console.log('Sending sub' + JSON.stringify(msg4));
			connection.send(JSON.stringify(msg4));			
			console.log('Sending sub' + JSON.stringify(msg5));
			connection.send(JSON.stringify(msg5));			
			console.log('Sending sub' + JSON.stringify(msg6));
			connection.send(JSON.stringify(msg6));									
        }
    }
    sendInit();
});

client.connect('wss://iboard.ssi.com.vn/realtime/graphql','graphql-ws');
