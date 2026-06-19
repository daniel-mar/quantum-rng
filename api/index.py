from fastapi import FastAPI

app = FastAPI()

@app.get("/api/random")
def get_quantum_number():
    # Lazy imports: Only load heavy libraries when the endpoint is hit
    from qiskit import QuantumCircuit
    from qiskit_aer import AerSimulator
    
    qc = QuantumCircuit(8, 8)
    qc.h(range(8))
    qc.measure(range(8), range(8))
    
    # Run the simulator
    result = AerSimulator().run(qc, shots=1).result()
    outcome = list(result.get_counts().keys())[0]
    
    return {"random_number": int(outcome, 2)}