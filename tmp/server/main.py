from flask import Flask
import json

app = Flask(__name__) 

@app.route("/projects", methods=["GET"])
def get_projects(): 
    with open("projects.json", "r") as f: 
        proj = json.load(f)
        print(proj)
    return json.dumps(proj)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
