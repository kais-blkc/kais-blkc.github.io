from http.server import HTTPServer, CGIHTTPRequestHandler

server_data = ("localhost", 3000)
server = HTTPServer(server_data, CGIHTTPRequestHandler)
print("Server started")
server.serve_forever()
