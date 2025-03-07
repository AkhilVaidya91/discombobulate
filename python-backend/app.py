from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from modules.models import LLMModelInterface

MONGO_URI = ""
DB_NAME = ""
GEMINI_API_KEY = ""
llm_interface = LLMModelInterface()

app = Flask(__name__)
CORS(app)

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db["items"]

# Routes
@app.route("/")
def home():
    return jsonify({"message": "API is running"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)