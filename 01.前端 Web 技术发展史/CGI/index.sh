#!/bin/sh 
 
# Headers are written first. The special "Status" 
# header indicates the response status code 
echo "Status: 200"
echo "Content-Type: text/html"
echo
 
# Followed by a response body 
echo "<html>"
echo "<head><meta charset=\"UTF-8\"></head>"
echo "<body>"
echo "<div>Hello CGI!<div/>"
echo "<div>"$0"<div/>"
echo "<div>"$1"<div/>"
echo "<div>"$2"<div/>"
echo "</body>"
echo "</html>"