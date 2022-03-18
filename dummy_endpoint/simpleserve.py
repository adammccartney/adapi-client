#!/usr/bin/env python3
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import socketserver

PORT = 8353

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', 'http://localhost:9000')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else PORT)
