#!/usr/bin/env node
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log("'WebSocket Client Connected'"+Date(Date.now()).toString()+"'");

    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log("'Connection Closed'" + Date(Date.now()).toString()+"'");
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
//            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    function sendInit() {
        var msginit = {
                type: "connection_init",
                payload: {}
        };
var msg1 = {
        "id":"1",
 "type":"start",
 "payload":{
	         "variables":{},
             "extensions":{},"operationName":null,
             "query":"subscription {\n  systemStatusChanged {\n    status\n    __typename\n  }\n}\n"
		   }
};

var msg2 = {
"id":"2",
  "type":"start",
  "payload":{
              "variables":{"markets":["hose","hnx","upcom"]},
			  "extensions":{},"operationName":"notifySessionByList",
              "query":"subscription notifySessionByList($markets: [String!]!) {\n  notifySessionByList(markets: $markets) {\n    market\n    session\n    __typename\n  }\n}\n"
			}
};


var msg3 = {
        "id":"3",
 "type":"start",
 "payload":{
             "variables":{"indexIds":["VNINDEX","VN30","HNX30","HNXIndex","HNXUpcomIndex","VNXALL"]},
			 "extensions":{},"operationName":"notifyIndexRealtimeByList",
			 "query":"subscription notifyIndexRealtimeByList($indexIds: [String!]!) {\n  notifyIndexRealtimeByList(indexIds: $indexIds) {\n    indexID\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
		   }
};

var msg4 = {
"id":"4",
 "type":"start",
 "payload":{
             "variables":{"arr":["hose:572","hose:582","hose:580","hose:629","hose:634","hose:792","hose:974","hose:1152","hose:1146","hose:1386","hose:1354","hose:2027","hose:2024","hose:2028","hose:2200","hose:2557","hose:2735","hose:2740","hose:2947","hose:2923","hose:2920","hose:2908","hose:32","hose:3825","hose:29","hose:3813","hose:3847","hose:3801","hose:3852","hose:3854"]},
			 "extensions":{},
			 "operationName":"stockRealtimeByList",
			 "query":"subscription stockRealtimeByList($arr: [String]!) {\n  stockRealtimeByList(arr: $arr) {\n    data\n    __typename\n  }\n}\n"
		   }
};

var msg5 = {
	"id":"5",
	"type":"start",
	"payload":{"variables":{"indexIds":["VNINDEX","VN30","HNX30","HNXIndex","HNXUpcomIndex","VNXALL"]},"extensions":{},"operationName":"notifyIndexRealtimeByList",
	"query":"subscription notifyIndexRealtimeByList($indexIds: [String!]!) {\n  notifyIndexRealtimeByList(indexIds: $indexIds) {\n    indexID\n    indexValue\n    allQty\n    allValue\n    totalQtty\n    totalValue\n    advances\n    declines\n    nochanges\n    ceiling\n    floor\n    __typename\n  }\n}\n"
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
         }
    }
    sendInit();
});

client.connect('ws://realtime.kompa.vn/graphql','graphql-ws');
