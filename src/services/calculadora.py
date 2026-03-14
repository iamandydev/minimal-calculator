import sys
import json

def calcular(expresion):
    try:
        return eval(expresion)  # ⚠️ Para demo, no usar eval en producción
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    # Lee la expresión desde argumentos
    expresion = sys.argv[1]
    resultado = calcular(expresion)
    print(json.dumps({"resultado": resultado}))
