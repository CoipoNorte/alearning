import CodeBlock from '../components/ui/CodeBlock'
import IosCard from '../components/ui/IosCard'
import LiveDemo from '../components/ui/LiveDemo'

function AlIntro() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">📖 ¿Qué son los Algoritmos?</h2>
      <p className="text-[13px] text-ios-secondary">Un algoritmo es una serie de pasos ordenados para resolver un problema. Como una receta de cocina.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="¿Por qué importan?" icon="🤔" variant="green" delay={0.1}>
          <ul className="space-y-1.5 text-xs">
            <li>✅ <strong>Eficiencia</strong> — resolver problemas rápido</li>
            <li>✅ <strong>Entrevistas</strong> — todas las empresas lo preguntan</li>
            <li>✅ <strong>Pensamiento lógico</strong> — mejora tu código</li>
            <li>✅ <strong>Escalabilidad</strong> — tu app funcione con millones de datos</li>
          </ul>
        </IosCard>
        <IosCard title="Conceptos base" icon="📌" variant="blue" delay={0.2}>
          <ul className="space-y-1 text-xs">
            <li><span className="text-ios-blue font-bold">Input</span> — datos de entrada</li>
            <li><span className="text-ios-blue font-bold">Output</span> — resultado</li>
            <li><span className="text-ios-blue font-bold">Complejidad</span> — qué tan rápido/lento es</li>
            <li><span className="text-ios-blue font-bold">Estructura de datos</span> — cómo organizar datos</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function AlComplexity() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">📊 Complejidad Big O</h2>
      <p className="text-[13px] text-ios-secondary">Big O mide cómo crece el tiempo/espacio cuando crece el input.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="De mejor a peor" icon="📊" variant="green">
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between p-1.5 rounded-lg bg-ios-green/10"><span className="text-ios-green font-bold">O(1)</span><span>Constante — instantáneo</span></div>
            <div className="flex justify-between p-1.5 rounded-lg bg-ios-green/10"><span className="text-ios-green font-bold">O(log n)</span><span>Logarítmico — muy rápido</span></div>
            <div className="flex justify-between p-1.5 rounded-lg bg-ios-blue/10"><span className="text-ios-blue font-bold">O(n)</span><span>Lineal — proporcional</span></div>
            <div className="flex justify-between p-1.5 rounded-lg bg-ios-orange/10"><span className="text-ios-orange font-bold">O(n log n)</span><span>Linearítmico — sorts buenos</span></div>
            <div className="flex justify-between p-1.5 rounded-lg bg-ios-red/10"><span className="text-ios-red font-bold">O(n²)</span><span>Cuadrático — loops anidados</span></div>
            <div className="flex justify-between p-1.5 rounded-lg bg-ios-pink/10"><span className="text-ios-pink font-bold">O(2ⁿ)</span><span>Exponencial — muy lento</span></div>
          </div>
        </IosCard>
        <CodeBlock title="Ejemplos" language="js" code={`// O(1) — Constante
const first = arr[0];

// O(log n) — Búsqueda binaria
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
}

// O(n) — Recorrer array
for (const item of arr) { /* ... */ }

// O(n²) — Loops anidados
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++) { /* ... */ }

// O(n log n) — Merge sort, Quick sort
arr.sort((a, b) => a - b);`} />
      </div>
    </div>
  )
}

function AlSearch() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">🔍 Algoritmos de Búsqueda</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Búsqueda lineal O(n)" language="js" code={`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
// Recorre uno por uno. Simple pero lento.`} />
        <CodeBlock title="Búsqueda binaria O(log n)" language="js" code={`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// REQUIERE array ordenado. Divide a la mitad cada vez.
// 1 millón de elementos → máx 20 pasos`} />
      </div>
    </div>
  )
}

function AlSort() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">📶 Algoritmos de Ordenamiento</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Bubble Sort O(n²)" language="js" code={`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// Simple pero lento. Solo para aprender.`} />
        <CodeBlock title="Merge Sort O(n log n)" language="js" code={`function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}
// Divide y conquista. Estable y rápido.`} />
      </div>
    </div>
  )
}

function AlRecursion() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">🔄 Recursividad</h2>
      <p className="text-[13px] text-ios-secondary">Una función que se llama a sí misma. Siempre necesita un caso base para no ser infinita.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Ejemplos clásicos" language="js" code={`// Factorial: n! = n * (n-1) * ... * 1
function factorial(n) {
  if (n <= 1) return 1;       // caso base
  return n * factorial(n - 1); // caso recursivo
}
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
function fibonacci(n) {
  if (n <= 1) return n;       // caso base
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// ⚠️ O(2ⁿ) — MUY lento. Usar memoización.

// Fibonacci con memoización O(n)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Recorrer árbol
function traverse(node) {
  if (!node) return;
  console.log(node.value);
  traverse(node.left);
  traverse(node.right);
}`} />
        <IosCard title="Anatomía de la recursión" icon="🔬" variant="green">
          <ul className="space-y-2 text-xs">
            <li><span className="text-ios-green font-bold">1. Caso base</span> — Condición de parada. Sin esto = loop infinito.</li>
            <li><span className="text-ios-blue font-bold">2. Caso recursivo</span> — La función se llama con input más pequeño.</li>
            <li><span className="text-ios-purple font-bold">3. Progreso</span> — Cada llamada se acerca al caso base.</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function AlStructures() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">🏗️ Estructuras de Datos</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Las más importantes" icon="📋" variant="blue">
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-green font-bold">Array</span> — Lista indexada. O(1) acceso, O(n) insertar/eliminar.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-blue font-bold">Hash Map</span> — Clave:valor. O(1) todo. El más versátil.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-purple font-bold">Stack (Pila)</span> — LIFO. push/pop O(1). Undo, llamadas.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-orange font-bold">Queue (Cola)</span> — FIFO. enqueue/dequeue O(1). Tareas.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-pink font-bold">Linked List</span> — Nodos enlazados. O(1) insertar, O(n) buscar.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-teal font-bold">Tree</span> — Jerárquico. DOM, archivos, DBs.</div>
            <div className="p-2 rounded-lg bg-ios-surface"><span className="text-ios-yellow font-bold">Graph</span> — Nodos + aristas. Redes sociales, mapas.</div>
          </div>
        </IosCard>
        <CodeBlock title="Implementaciones en JS" language="js" code={`// Stack (con array)
const stack = [];
stack.push(1); stack.push(2);
stack.pop(); // 2 (último)

// Queue (con array)
const queue = [];
queue.push(1); queue.push(2);
queue.shift(); // 1 (primero)

// Hash Map
const map = new Map();
map.set('key', 'value');
map.get('key'); // 'value'
map.has('key'); // true

// Set (valores únicos)
const set = new Set([1, 2, 2, 3]);
// Set {1, 2, 3}

// Linked List
class Node {
  constructor(val) { this.val = val; this.next = null; }
}
class LinkedList {
  constructor() { this.head = null; }
  add(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }
}`} />
      </div>
    </div>
  )
}

function AlDynamic() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">⚡ Programación Dinámica</h2>
      <p className="text-[13px] text-ios-secondary">Resolver problemas dividiéndolos en subproblemas y guardando resultados para no recalcular.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Fibonacci con DP" language="js" code={`// Top-down (memoización)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Bottom-up (tabulación)
function fibTab(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Climbing stairs (subir escaleras de 1 o 2 pasos)
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`} />
        <IosCard title="Cuándo usar DP" icon="🤔" variant="purple">
          <ul className="space-y-1.5 text-xs">
            <li>✅ El problema tiene <strong>subproblemas superpuestos</strong></li>
            <li>✅ Tiene <strong>subestructura óptima</strong></li>
            <li>✅ Se puede resolver recursivamente</li>
            <li>📌 <strong>Memoización</strong> = guardar resultados ya calculados</li>
            <li>📌 <strong>Tabulación</strong> = llenar tabla de abajo hacia arriba</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

function AlTips() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-algo-green">💡 Tips para Entrevistas</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        <IosCard title="Estrategia" icon="🎯" variant="green">
          <ol className="space-y-1.5 text-xs list-decimal pl-4">
            <li>Entender el problema (preguntar ejemplos)</li>
            <li>Pensar en el enfoque bruto (fuerza bruta)</li>
            <li>Optimizar (¿puedo usar hash map? DP? Two pointers?)</li>
            <li>Codear la solución</li>
            <li>Testear con ejemplos (edge cases)</li>
            <li>Analizar complejidad (Big O)</li>
          </ol>
        </IosCard>
        <IosCard title="Patrones comunes" icon="🧩" variant="blue">
          <ul className="space-y-1 text-xs">
            <li>🔵 <strong>Two Pointers</strong> — arrays ordenados</li>
            <li>🟢 <strong>Sliding Window</strong> — subarrays contiguos</li>
            <li>🟡 <strong>Hash Map</strong> — búsqueda O(1)</li>
            <li>🔴 <strong>BFS/DFS</strong> — árboles y grafos</li>
            <li>🟣 <strong>Binary Search</strong> — arrays ordenados</li>
            <li>⚡ <strong>DP</strong> — optimización, combinatoria</li>
          </ul>
        </IosCard>
      </div>
    </div>
  )
}

export const algoTopics = {
  'al-intro': AlIntro, 'al-complexity': AlComplexity, 'al-search': AlSearch,
  'al-sort': AlSort, 'al-recursion': AlRecursion, 'al-structures': AlStructures,
  'al-dynamic': AlDynamic, 'al-tips': AlTips,
}
