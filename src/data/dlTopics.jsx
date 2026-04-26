import CodeBlock from '../components/ui/CodeBlock'
import IosCard from '../components/ui/IosCard'

function DlIntro() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-dl-pink">📖 ¿Qué es Deep Learning?</h2>
      <p className="text-[13px] text-ios-secondary">Subconjunto de ML que usa <span className="text-dl-pink font-bold">redes neuronales con muchas capas</span> para aprender representaciones complejas.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="ML vs Deep Learning" icon="⚔️" variant="pink">
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ml-purple font-bold">ML clásico:</span> Tú defines las features. Datos tabulares. scikit-learn.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-dl-pink font-bold">Deep Learning:</span> El modelo aprende las features. Imágenes, texto, audio. TensorFlow/PyTorch.</div>
          </div>
        </IosCard>
        <IosCard title="¿Dónde se usa?" icon="🌍" variant="blue">
          <ul className="space-y-1 text-xs">
            <li>🖼️ Visión por computadora (fotos, video)</li>
            <li>💬 NLP — ChatGPT, traducción, resúmenes</li>
            <li>🎵 Audio — reconocimiento de voz, música</li>
            <li>🎮 Juegos — AlphaGo, game AI</li>
            <li>🚗 Conducción autónoma</li>
            <li>🎨 Generativo — DALL-E, Midjourney, Stable Diffusion</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function DlNeural() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-dl-pink">🕸️ Redes Neuronales</h2>
      <p className="text-[13px] text-ios-secondary">Inspiradas en el cerebro. Neuronas artificiales organizadas en capas.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Anatomía" icon="🧠" variant="pink">
          <ul className="space-y-2 text-xs">
            <li><span className="text-ios-green font-bold">Input Layer</span> — Recibe los datos (features)</li>
            <li><span className="text-ios-blue font-bold">Hidden Layers</span> — Procesan y transforman. Más capas = más "deep".</li>
            <li><span className="text-ios-red font-bold">Output Layer</span> — Resultado (predicción)</li>
            <li><span className="text-ios-purple font-bold">Weights</span> — Conexiones entre neuronas (se ajustan al entrenar)</li>
            <li><span className="text-ios-orange font-bold">Activation</span> — ReLU, Sigmoid, Softmax. Introducen no-linealidad.</li>
            <li><span className="text-ios-teal font-bold">Backpropagation</span> — Algoritmo que ajusta los weights.</li>
          </ul>
        </IosCard>
        <CodeBlock title="Red neuronal con PyTorch" language="js" code={`import torch
import torch.nn as nn

class MiRed(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(10, 64),   # input: 10 features
            nn.ReLU(),           # activación
            nn.Linear(64, 32),   # hidden layer
            nn.ReLU(),
            nn.Linear(32, 1),    # output: 1 valor
            nn.Sigmoid()         # entre 0 y 1
        )
    
    def forward(self, x):
        return self.layers(x)

model = MiRed()
criterion = nn.BCELoss()        # loss function
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(100):
    output = model(X_train)
    loss = criterion(output, y_train)
    optimizer.zero_grad()
    loss.backward()              # backpropagation
    optimizer.step()             # actualizar weights`} />
      </div>
    </div>
  )
}

function DlCnn() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-dl-pink">🖼️ CNN — Redes Convolucionales</h2>
      <p className="text-[13px] text-ios-secondary">Especializadas en imágenes. Detectan patrones visuales: bordes, texturas, objetos.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Capas de una CNN" icon="🏗️" variant="pink">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-ios-blue font-bold">Conv2D</span> — Filtros que detectan features (bordes, texturas)</li>
            <li><span className="text-ios-green font-bold">ReLU</span> — Activación no-lineal</li>
            <li><span className="text-ios-purple font-bold">MaxPool</span> — Reducir tamaño, mantener features importantes</li>
            <li><span className="text-ios-orange font-bold">Flatten</span> — Convertir 2D a 1D</li>
            <li><span className="text-ios-red font-bold">Dense</span> — Capas fully connected para clasificar</li>
            <li><span className="text-ios-teal font-bold">Softmax</span> — Probabilidades por clase (gato: 90%, perro: 10%)</li>
          </ul>
        </IosCard>
        <CodeBlock title="CNN con PyTorch" language="js" code={`class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv_layers = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1),  # 3 canales RGB
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(32, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
        )
        self.fc_layers = nn.Sequential(
            nn.Flatten(),
            nn.Linear(64 * 8 * 8, 128),
            nn.ReLU(),
            nn.Linear(128, 10),   # 10 clases
        )
    
    def forward(self, x):
        x = self.conv_layers(x)
        x = self.fc_layers(x)
        return x`} />
      </div>
    </div>
  )
}

function DlRnn() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-dl-pink">📝 RNN — Redes Recurrentes</h2>
      <p className="text-[13px] text-ios-secondary">Para datos secuenciales: texto, series de tiempo, audio. Tienen "memoria".</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Tipos de RNN" icon="📋" variant="purple">
          <ul className="space-y-2 text-xs">
            <li><span className="text-ios-blue font-bold">RNN básica</span> — Memoria corta. Problema del vanishing gradient.</li>
            <li><span className="text-ios-green font-bold">LSTM</span> — Long Short-Term Memory. Memoria larga. El más usado.</li>
            <li><span className="text-ios-purple font-bold">GRU</span> — Gated Recurrent Unit. Más simple que LSTM, similar rendimiento.</li>
            <li><span className="text-ios-pink font-bold">Bidirectional</span> — Lee en ambas direcciones.</li>
          </ul>
        </IosCard>
        <IosCard title="Aplicaciones" icon="🌍" variant="blue">
          <ul className="space-y-1 text-xs">
            <li>💬 Análisis de sentimiento</li>
            <li>🌐 Traducción automática</li>
            <li>📝 Generación de texto</li>
            <li>🎵 Generación de música</li>
            <li>📈 Predicción de series temporales</li>
            <li>🗣️ Reconocimiento de voz</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function DlTransformers() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-dl-pink">🤖 Transformers & LLMs</h2>
      <p className="text-[13px] text-ios-secondary">La arquitectura detrás de ChatGPT, BERT, GPT-4, Claude, Gemini.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="¿Qué es un Transformer?" icon="🤖" variant="pink">
          <ul className="space-y-1.5 text-xs">
            <li><strong>Atención</strong> — cada palabra "mira" a todas las demás para entender contexto</li>
            <li><strong>Self-Attention</strong> — pondera la importancia de cada palabra</li>
            <li><strong>Sin recurrencia</strong> — procesa todo en paralelo (más rápido que RNN)</li>
            <li><strong>Paper:</strong> "Attention Is All You Need" (2017, Google)</li>
          </ul>
        </IosCard>
        <IosCard title="LLMs famosos" icon="🌟" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li><span className="text-ios-green font-bold">GPT-4</span> — OpenAI. ChatGPT. El más conocido.</li>
            <li><span className="text-ios-purple font-bold">Claude</span> — Anthropic. Seguro y preciso.</li>
            <li><span className="text-ios-blue font-bold">Gemini</span> — Google. Multimodal.</li>
            <li><span className="text-ios-orange font-bold">LLaMA</span> — Meta. Open source.</li>
            <li><span className="text-ios-red font-bold">Mistral</span> — Europeo. Eficiente.</li>
            <li><span className="text-ios-teal font-bold">BERT</span> — Google. Para clasificación y búsqueda.</li>
          </ul>
        </IosCard>
      </div>
      <CodeBlock title="Usar un modelo con HuggingFace" language="js" code={`# pip install transformers torch

from transformers import pipeline

# Análisis de sentimiento (1 línea!)
classifier = pipeline("sentiment-analysis")
result = classifier("I love machine learning!")
# [{'label': 'POSITIVE', 'score': 0.9998}]

# Generación de texto
generator = pipeline("text-generation", model="gpt2")
text = generator("The future of AI is", max_length=50)

# Traducción
translator = pipeline("translation_en_to_fr")
result = translator("Hello, how are you?")

# Resumir texto
summarizer = pipeline("summarization")
summary = summarizer(long_text, max_length=100)`} />
    </div>
  )
}

function DlPractice() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-dl-pink">🐍 Práctica con Python</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Roadmap de aprendizaje" icon="🗺️" variant="green">
          <ol className="space-y-1.5 text-xs list-decimal pl-4">
            <li><strong>Python básico</strong> — variables, funciones, clases</li>
            <li><strong>NumPy</strong> — arrays y operaciones matemáticas</li>
            <li><strong>Pandas</strong> — DataFrames, limpieza de datos</li>
            <li><strong>Matplotlib</strong> — visualización</li>
            <li><strong>scikit-learn</strong> — ML clásico</li>
            <li><strong>PyTorch</strong> — Deep Learning</li>
            <li><strong>HuggingFace</strong> — modelos pre-entrenados</li>
            <li><strong>Kaggle</strong> — competencias y datasets</li>
          </ol>
        </IosCard>
        <IosCard title="Recursos gratuitos" icon="📚" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li>🎓 <strong>fast.ai</strong> — Curso práctico de DL (gratis)</li>
            <li>📘 <strong>CS231n</strong> — Stanford, computer vision</li>
            <li>📗 <strong>CS224n</strong> — Stanford, NLP</li>
            <li>🏆 <strong>Kaggle</strong> — Datasets + competencias</li>
            <li>🤗 <strong>HuggingFace</strong> — Modelos y datasets</li>
            <li>📓 <strong>Google Colab</strong> — Jupyter + GPU gratis</li>
          </ul>
        </IosCard>
      </div>
      <IosCard title="🧠 ¡Completado!" icon="🎉" variant="pink">
        <ul className="space-y-1 text-xs">
          <li><span className="text-ios-green">✓</span> Algoritmos — Big O, búsqueda, sort, recursión, DP</li>
          <li><span className="text-ios-green">✓</span> ML — regresión, clasificación, clustering</li>
          <li><span className="text-ios-green">✓</span> Deep Learning — CNN, RNN, Transformers</li>
        </ul>
      </IosCard>
    </div>
  )
}

export const dlTopics = {
  'dl-intro': DlIntro, 'dl-neural': DlNeural, 'dl-cnn': DlCnn,
  'dl-rnn': DlRnn, 'dl-transformers': DlTransformers, 'dl-practice': DlPractice,
}
