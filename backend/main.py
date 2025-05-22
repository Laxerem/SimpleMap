from flask import Flask
import redis

app = Flask(__name__)

r = redis.Redis()

@app.route('tiles/<z>/<x>/<y>.png')
def get_tile(z, x, y):
    tile_key = f"tile:{z}:{x}:{y}"
    tile_data = r.get(tile_key)
    
    if not tile_data:
        tile_data = generate_tile(z, x, y)  # Генерация или загрузка тайла
        r.setex(tile_key, 86400, tile_data)  # Кэш на 24 часа
    
    return tile_data, 200, {'Content-Type': 'image/png'}