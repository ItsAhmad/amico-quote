from flask import Flask, request, jsonify
from flask_cors import CORS
from smartsheetScript import get_tier_data

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

@app.route('/get-price', methods=['POST'])
def get_price():
    
    if request.method == 'OPTIONS':
        return '', 200

    data = request.get_json()
    part_number = data.get("partNumber")

    # For now, always use Tier 1; you can customize this based on partNumber
    result = get_tier_data("Tier 1")

    return jsonify({"price": result})

if __name__ == "__main__":
    app.run(debug=True)