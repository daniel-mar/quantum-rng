from fastapi import FastAPI
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

app = FastAPI()

@app.get("/api/random")
def geT_quantum_number():
    qc = QuantumCircuit(8, 8)
    qc.h(range(8))
    qc.measure(range(8), range(8))
    result = AerSimulator().run(qc, shots=1).result()
    outcome = list(result.get_counts().keys())[0]
    return {"random_number": int(outcome, 2)}