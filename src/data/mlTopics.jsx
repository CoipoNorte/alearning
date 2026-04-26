import CodeBlock from '../components/ui/CodeBlock'
import IosCard from '../components/ui/IosCard'

function MlIntro() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-ml-purple">📖 ¿Qué es Machine Learning?</h2>
      <p className="text-[13px] text-ios-secondary">Máquinas que <span className="text-ml-purple font-bold">aprenden de datos</span> sin ser programadas explícitamente.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Programación tradicional vs ML" icon="⚔️" variant="purple">
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-blue font-bold">Tradicional:</span> Datos + Reglas → Resultado</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ml-purple font-bold">ML:</span> Datos + Resultados → Reglas (el modelo aprende)</div>
          </div>
        </IosCard>
        <IosCard title="Aplicaciones reales" icon="🌍" variant="blue">
          <ul className="space-y-1 text-xs">
            <li>🎵 Spotify — recomendar canciones</li>
            <li>📧 Gmail — filtrar spam</li>
            <li>🚗 Tesla — conducción autónoma</li>
            <li>💬 ChatGPT — entender y generar texto</li>
            <li>📸 Instagram — detectar contenido</li>
            <li>🏥 Medicina — diagnosticar enfermedades</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function MlTypes() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-ml-purple">📋 Tipos de Aprendizaje</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Supervisado" icon="👨‍🏫" variant="green">
          <ul className="space-y-1.5 text-xs">
            <li><strong>Datos etiquetados</strong> — el modelo aprende de ejemplos con respuesta</li>
            <li>📈 <strong>Regresión</strong> — predecir número (precio, temperatura)</li>
            <li>🏷️ <strong>Clasificación</strong> — predecir categoría (spam/no spam)</li>
            <li>Ejemplos: predicción precios, diagnóstico médico, detección fraude</li>
          </ul>
        </IosCard>
        <IosCard title="No supervisado" icon="🔍" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li><strong>Sin etiquetas</strong> — el modelo encuentra patrones solo</li>
            <li>🔵 <strong>Clustering</strong> — agrupar datos similares</li>
            <li>📉 <strong>Reducción dimensionalidad</strong> — simplificar datos</li>
            <li>Ejemplos: segmentación clientes, detección anomalías</li>
          </ul>
        </IosCard>
      </div>
      <IosCard title="Por refuerzo" icon="🎮" variant="orange">
        <p className="text-xs">El agente aprende por prueba y error. Recibe recompensas o castigos. Usado en juegos, robótica, trading.</p>
      </IosCard>
    </div>
  )
}

function MlRegression() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-ml-purple">📈 Regresión</h2>
      <p className="text-[13px] text-ios-secondary">Predecir un valor numérico continuo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Regresión lineal con Python" language="js" code={`# pip install scikit-learn numpy pandas

import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Datos: tamaño de casa → precio
X = np.array([[50], [80], [100], [120], [150], [200]])
y = np.array([100, 160, 200, 240, 300, 400])  # miles

# Dividir datos: 80% train, 20% test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Crear y entrenar modelo
model = LinearRegression()
model.fit(X_train, y_train)

# Predecir
precio = model.predict([[130]])  # casa de 130m²
print("Precio estimado:", round(precio[0]), "k")

# Precisión
score = model.score(X_test, y_test)
print("R2 score:", round(score, 2))  # 1.0 = perfecto`} />
        <IosCard title="Tipos de regresión" icon="📊" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-ios-green font-bold">Lineal</span> — línea recta. Simple y rápida.</li>
            <li><span className="text-ios-blue font-bold">Polinomial</span> — curva. Datos no lineales.</li>
            <li><span className="text-ios-purple font-bold">Ridge/Lasso</span> — con regularización. Evitar overfitting.</li>
            <li><span className="text-ios-orange font-bold">Random Forest</span> — múltiples árboles. Robusto.</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function MlClassification() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-ml-purple">🏷️ Clasificación</h2>
      <p className="text-[13px] text-ios-secondary">Predecir una categoría: sí/no, spam/ham, gato/perro.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Clasificación con scikit-learn" language="js" code={`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Datos: [edad, salario] → compra (0/1)
X = [[25,30000],[35,50000],[45,80000],[20,20000],[50,90000],[30,40000]]
y = [0, 0, 1, 0, 1, 0]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.0%}")

# Predecir nuevo
result = model.predict([[40, 70000]])
print("Compra" if result[0] == 1 else "No compra")`} />
        <IosCard title="Algoritmos populares" icon="🧰" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-ios-green font-bold">Logistic Regression</span> — simple, interpretable</li>
            <li><span className="text-ios-blue font-bold">Random Forest</span> — robusto, poco tuning</li>
            <li><span className="text-ios-purple font-bold">SVM</span> — bueno con pocas features</li>
            <li><span className="text-ios-orange font-bold">KNN</span> — basado en vecinos cercanos</li>
            <li><span className="text-ios-pink font-bold">XGBoost</span> — el rey de Kaggle</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function MlClustering() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-ml-purple">🔵 Clustering</h2>
      <p className="text-[13px] text-ios-secondary">Agrupar datos similares sin etiquetas previas.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="K-Means" language="js" code={`from sklearn.cluster import KMeans
import numpy as np

# Datos de clientes: [edad, gasto_mensual]
X = np.array([
  [25, 200], [30, 300], [35, 250],   # grupo 1
  [55, 800], [60, 900], [50, 750],   # grupo 2
  [22, 50],  [28, 80],  [20, 60],    # grupo 3
])

# Crear 3 clusters
kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(X)

print(kmeans.labels_)      # [0, 0, 0, 1, 1, 1, 2, 2, 2]
print(kmeans.cluster_centers_)  # centroides

# Predecir nuevo cliente
cluster = kmeans.predict([[40, 500]])
print(f"Cliente pertenece al cluster {cluster[0]}")`} />
        <IosCard title="Algoritmos de clustering" icon="📋" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-ios-blue font-bold">K-Means</span> — el más usado. Necesitas decir K.</li>
            <li><span className="text-ios-purple font-bold">DBSCAN</span> — detecta forma arbitraria. No necesita K.</li>
            <li><span className="text-ios-green font-bold">Hierarchical</span> — dendrograma. Visual.</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function MlTools() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-ml-purple">🧰 Herramientas ML</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Ecosistema Python ML" icon="🐍" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-ios-blue font-bold">NumPy</span> — arrays y matemáticas</li>
            <li><span className="text-ios-green font-bold">Pandas</span> — DataFrames (tablas de datos)</li>
            <li><span className="text-ios-orange font-bold">scikit-learn</span> — ML clásico (regresión, clasificación)</li>
            <li><span className="text-ios-red font-bold">TensorFlow</span> — Deep Learning (Google)</li>
            <li><span className="text-ios-pink font-bold">PyTorch</span> — Deep Learning (Meta, preferido en investigación)</li>
            <li><span className="text-ios-purple font-bold">Matplotlib/Seaborn</span> — visualización</li>
            <li><span className="text-ios-teal font-bold">Jupyter Notebook</span> — entorno interactivo</li>
          </ul>
        </IosCard>
        <IosCard title="Flujo de trabajo ML" icon="🔄" variant="green">
          <ol className="space-y-1 text-xs list-decimal pl-4">
            <li>Recolectar datos</li>
            <li>Explorar y limpiar (EDA)</li>
            <li>Feature engineering</li>
            <li>Dividir train/test</li>
            <li>Elegir modelo</li>
            <li>Entrenar</li>
            <li>Evaluar (accuracy, precision, recall)</li>
            <li>Optimizar hiperparámetros</li>
            <li>Desplegar</li>
          </ol>
        </IosCard>
      </div>
    </div>
  )
}

export const mlTopics = {
  'ml-intro': MlIntro, 'ml-types': MlTypes, 'ml-regression': MlRegression,
  'ml-classification': MlClassification, 'ml-clustering': MlClustering, 'ml-tools': MlTools,
}
