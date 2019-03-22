#!/bin/bash
echo "" /tmp/wslog.txt
for i in {1..50}
do
	start=`date +%s`
	node ws-client.js &
	end=`date +%s`
	runtime=$((end-start))
	echo $runtime >> /tmp/wslog.txt
done
