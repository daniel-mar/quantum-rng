Clone the repo

While in the quantum-rng project folder create your virtual environment (.qenv is what I chose to name my env)
- python3 -m venv .qenv

Activate said enviroment
### Bash:
- source .qenv/Scripts/activate

Run the backend Python server
- python -m uvicorn api.index:app --port 8000 --reload

Leave this console running and open another bash console, cd into client-app folder

Run the front-end file to point to the API (Python Backend to Quantum RNG)
- ng serve --proxy-config proxy.conf.json

Visit http://localhost:4200/

Click on the generate random number button and it will populate a localStorage list.

# Why did I want to do this?

Well what differs from this project and the project that gave me confidence in a random number generated from Quantum Computing.
Was that instead of generating 4000 different values to prove that it is truly random.
- (50% using Quantum Superposition of is it a 0 or 1 when viewed to build the bits that form our digits).
The goal there was to have statistically proven it is anywhere between 40% - 60%, mostly sitting between 50%.

I then just generated a single value and stored it because the math supported that it infact was truly random.
What makes it truly random? Well, Quantum Computing is having us understand that it is either a 1 or a 0.
But where it differs is that there can be photonic Qubits, where we can measure it differently and provide more areas for randomness.

Such that you can view a photons polarity from different angles; left, right, diaganol left, diagonal right, etc etc. This could increase the randomness probability.
As the value is set once it is viewed, and changing how you view it can make it random.

### This is of interest because it makes me think of PKQ and encryption applications and what is happening on a Quantum Computer as an encryption method.
