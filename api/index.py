from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Lazy imports: Only load heavy libraries when actually called
            from qiskit import QuantumCircuit
            from qiskit_aer import AerSimulator

            # Quantum logic
            qc = QuantumCircuit(8, 8)
            qc.h(range(8))
            qc.measure(range(8), range(8))
            
            # Execute simulation of Quantum Random Number Generation
            result = AerSimulator().run(qc, shots=1).result()
            outcome = list(result.get_counts().keys())[0]
            random_val = int(outcome, 2)

            # On Success
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"random_number": random_val}).encode('utf-8'))

        except Exception as e:
            # Error handling
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))