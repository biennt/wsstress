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

var msg7 = {
	"id": "7",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNX30"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    indexID\n    totalQtty\n    allQty\n    allValue\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg12 = {
	"id": "12",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNXIndex"
		},
		"extensions": {},
		"operationName": "notifyIndexChart",
		"query": "subscription notifyIndexChart($indexId: String!) {\n  notifyIndexChart(indexId: $indexId) {\n    indexID\n    data\n    __typename\n  }\n}\n"
	}
};

var msg13 = {
	"id": "13",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNXIndex"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    indexID\n    totalQtty\n    allQty\n    allValue\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg14 = {
	"id": "14",
	"type": "start",
	"payload": {
		"variables": {
			"market": "hnx"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($market: String!) {\n  notifySession(market: $market) {\n    session\n    __typename\n  }\n}\n"
	}
};

var msg15 = {
	"id": "15",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "VNINDEX"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg16 = {
	"id": "16",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNXUpcomIndex"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg17 = {
	"id": "17",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNXIndex"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg18 = {
	"id": "18",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "HNX30"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg19 = {
	"id": "19",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "VNXALL"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
	}
};

var msg810 = {
	"id": "810",
	"type": "start",
	"payload": {
		"variables": {
			"stockNo": "fu:1097"
		},
		"extensions": {},
		"operationName": "stockRealtimeChanged",
		"query": "subscription stockRealtimeChanged($stockNo: String!) {\n  stockRealtimeChanged(stockNo: $stockNo) {\n    data\n    __typename\n  }\n}\n"
	}
};

var msg811 = {
	"id": "811",
	"type": "start",
	"payload": {
		"variables": {
			"stockNo": "fu:1104"
		},
		"extensions": {},
		"operationName": "stockRealtimeChanged",
		"query": "subscription stockRealtimeChanged($stockNo: String!) {\n  stockRealtimeChanged(stockNo: $stockNo) {\n    data\n    __typename\n  }\n}\n"
	}
};

var msg812 = {
	"id": "812",
	"type": "start",
	"payload": {
		"variables": {
			"stockNo": "fu:1100"
		},
		"extensions": {},
		"operationName": "stockRealtimeChanged",
		"query": "subscription stockRealtimeChanged($stockNo: String!) {\n  stockRealtimeChanged(stockNo: $stockNo) {\n    data\n    __typename\n  }\n}\n"
	}
};

var msg813 = {
	"id": "813",
	"type": "start",
	"payload": {
		"variables": {
			"stockNo": "fu:1103"
		},
		"extensions": {},
		"operationName": "stockRealtimeChanged",
		"query": "subscription stockRealtimeChanged($stockNo: String!) {\n  stockRealtimeChanged(stockNo: $stockNo) {\n    data\n    __typename\n  }\n}\n"
	}
};

var msg814 = {
	"id": "814",
	"type": "start",
	"payload": {
		"variables": {
			"indexId": "VN30"
		},
		"extensions": {},
		"operationName": "notifyIndexRealtime",
		"query": "subscription notifyIndexRealtime($indexId: String!) {\n  notifyIndexRealtime(indexId: $indexId) {\n    indexValue\n    __typename\n  }\n}\n"
	}
};


        if (connection.connected) {
			console.log('Sending init' + JSON.stringify(msginit));
			connection.send(JSON.stringify(msginit));
			connection.send(JSON.stringify(msg1));
			connection.send(JSON.stringify(msg2));			
			connection.send(JSON.stringify(msg3));			
			connection.send(JSON.stringify(msg4));			
			connection.send(JSON.stringify(msg5));			
			connection.send(JSON.stringify(msg6));	
			connection.send(JSON.stringify(msg7));
			connection.send(JSON.stringify(msg12));
			connection.send(JSON.stringify(msg13));
			connection.send(JSON.stringify(msg14));
			connection.send(JSON.stringify(msg15));
			connection.send(JSON.stringify(msg16));			
			connection.send(JSON.stringify(msg17));			
			connection.send(JSON.stringify(msg18));			
			connection.send(JSON.stringify(msg19));						
			connection.send(JSON.stringify(msg810));									
			connection.send(JSON.stringify(msg811));									
			connection.send(JSON.stringify(msg812));									
			connection.send(JSON.stringify(msg813));									
			connection.send(JSON.stringify(msg814));									
        }
    }
    sendInit();
});

client.connect('wss://iboard.ssi.com.vn/realtime/graphql','graphql-ws');

  

