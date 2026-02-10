import http.server
import socketserver
import os

PORT = 8000

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the path points to a file that exists
        # If not, serve index.html
        path = self.translate_path(self.path)
        
        # If it's a directory or file exists, serve it normally
        if os.path.exists(path) and not os.path.isdir(path):
             super().do_GET()
             return
             
        # If it's the root path, serve index normally
        if self.path == '/':
            super().do_GET()
            return

        # Otherwise, if the file doesn't exist, serve index.html
        # This allows /Name to be handled by JS on the client side
        if not os.path.exists(path):
            self.path = '/index.html'
            
        super().do_GET()

with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    print(f"Serving at port {PORT}")
    print(f"Try http://localhost:{PORT}/AnyName")
    httpd.serve_forever()
