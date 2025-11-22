# 📊 Estructuras de Datos - ThinkCash Frontend

Este documento describe todas las **estructuras de datos algorítmicas** utilizadas en el proyecto ThinkCash (Arrays, Sets, Maps, algoritmos de ordenamiento, filtrado, etc.).

---

## 📑 Tabla de Contenidos

1. [Arrays (Arreglos)](#1-arrays-arreglos)
2. [Set (Conjunto)](#2-set-conjunto)
3. [HashMap/Object (Diccionario)](#3-hashmapobject-diccionario)
4. [Algoritmos de Ordenamiento](#4-algoritmos-de-ordenamiento)
5. [Algoritmos de Filtrado](#5-algoritmos-de-filtrado)
6. [Algoritmos de Reducción/Agregación](#6-algoritmos-de-reducciónagregación)
7. [Algoritmos de Búsqueda](#7-algoritmos-de-búsqueda)
8. [Algoritmos de Transformación](#8-algoritmos-de-transformación)
9. [Análisis de Complejidad](#9-análisis-de-complejidad)

---

## 1. Arrays (Arreglos)

### 1.1 Array Dinámico - Lista de Transacciones

**Ubicación:** `TransactionsPage.tsx`, `IncomeForm.tsx`, `ExpenseForm.tsx`, `NimAi.tsx`

**Descripción:** Estructura de datos lineal de tamaño dinámico que almacena transacciones financieras.

```typescript
const [items, setItems] = useState<TItem[]>([])
const [tips, setTips] = useState<string[]>([])
const [months, setMonths] = useState<any[]>([])
const [trends, setTrends] = useState<any[]>([])
```

**Operaciones utilizadas:**

#### 1.1.1 Inserción
```typescript
// O(n) - Agregar elemento y actualizar estado
const list = await getTransactions(userEmail)
setItems(list)  // Reemplaza todo el array
```

#### 1.1.2 Lectura/Acceso
```typescript
// O(1) - Acceso por índice
data.series[0]
```

#### 1.1.3 Iteración
```typescript
// O(n) - Recorrer todos los elementos
items.forEach((it) => { /* procesar */ })

// O(n) - Map para transformar
items.map((it, i) => <Component key={i} data={it} />)
```

#### 1.1.4 Clonación
```typescript
// O(n) - Crear copia superficial
let out = items.slice()
```

**Complejidad:**
- Acceso: O(1)
- Búsqueda: O(n)
- Inserción al final: O(1) amortizado
- Eliminación: O(n)

---

## 2. Set (Conjunto)

### 2.1 Set para Categorías Únicas

**Ubicación:** `TransactionsPage.tsx` (línea 29)

**Descripción:** Estructura que almacena valores únicos sin duplicados, usada para extraer categorías de gastos.

```typescript
const categories = useMemo(() => {
  const set = new Set<string>()
  items.forEach((it) => { 
    if (it.kind === 'gasto' && it.type) 
      set.add(it.type) 
  })
  return Array.from(set)
}, [items])
```

**Propósito:** Eliminar duplicados automáticamente de las categorías de gastos.

**Operaciones:**

#### 2.1.1 Inserción
```typescript
// O(1) - Agregar elemento (ignora duplicados)
set.add(it.type)
```

#### 2.1.2 Conversión a Array
```typescript
// O(n) - Convertir Set a Array
Array.from(set)
```

**Ejemplo de ejecución:**
```typescript
// Datos de entrada
items = [
  { kind: 'gasto', type: 'Alimentación' },
  { kind: 'gasto', type: 'Transporte' },
  { kind: 'gasto', type: 'Alimentación' },  // Duplicado
  { kind: 'gasto', type: 'Vivienda' }
]

// Proceso
set.add('Alimentación')  // Set: {'Alimentación'}
set.add('Transporte')    // Set: {'Alimentación', 'Transporte'}
set.add('Alimentación')  // Set: {'Alimentación', 'Transporte'} (no cambia)
set.add('Vivienda')      // Set: {'Alimentación', 'Transporte', 'Vivienda'}

// Resultado
categories = ['Alimentación', 'Transporte', 'Vivienda']
```

**Complejidad:**
- Inserción: O(1)
- Búsqueda: O(1)
- Eliminación: O(1)
- Conversión a Array: O(n)

**Ventajas sobre Array:**
- Eliminación automática de duplicados
- Búsqueda más rápida O(1) vs O(n)

---

## 3. HashMap/Object (Diccionario)

### 3.1 Object como Mapa - Categorías del Dashboard

**Ubicación:** `FinanceDashboard.tsx` (línea 115)

**Descripción:** Estructura clave-valor para almacenar montos por categoría.

```typescript
categories: {
  [category: string]: number
}

// Ejemplo
{
  "Alimentación": 450.00,
  "Transporte": 300.00,
  "Vivienda": 800.00
}
```

**Operaciones:**

#### 3.1.1 Iteración sobre entradas
```typescript
// O(n) - Convertir objeto a array de pares [clave, valor]
Object.entries(data.categories || {})
  .map(([name, value]) => ({ name, value }))
```

#### 3.1.2 Acceso por clave
```typescript
// O(1) - Acceder a valor por categoría
data.categories["Alimentación"]  // 450.00
```

**Ejemplo práctico:**
```typescript
const categories = {
  "Alimentación": 450.00,
  "Transporte": 300.00,
  "Vivienda": 800.00
}

// Transformación para PieChart
Object.entries(categories)
// Resultado: [
//   ["Alimentación", 450.00],
//   ["Transporte", 300.00],
//   ["Vivienda", 800.00]
// ]

.map(([name, value]) => ({ name, value }))
// Resultado: [
//   { name: "Alimentación", value: 450.00 },
//   { name: "Transporte", value: 300.00 },
//   { name: "Vivienda", value: 800.00 }
// ]
```

**Complejidad:**
- Acceso: O(1)
- Inserción: O(1)
- Eliminación: O(1)
- Iteración: O(n)

---

## 4. Algoritmos de Ordenamiento

### 4.1 Ordenamiento por Fecha (Merge Sort)

**Ubicación:** `TransactionsPage.tsx` (línea 42)

**Descripción:** Algoritmo de ordenamiento implementado nativamente en `Array.sort()` (típicamente QuickSort o MergeSort).

```typescript
out.sort((a, b) => {
  const da = new Date(a.date).getTime()
  const db = new Date(b.date).getTime()
  return sortDir === 'desc' ? db - da : da - db
})
```

**Funcionamiento:**

1. **Extracción de clave:** Convierte fecha string a timestamp numérico
2. **Comparación:** Resta timestamps para determinar orden
3. **Dirección:** Invierte resultado según `sortDir`

**Ejemplo de ejecución:**

```typescript
// Datos de entrada
items = [
  { date: "2025-11-20", description: "Compra A" },
  { date: "2025-11-18", description: "Compra B" },
  { date: "2025-11-21", description: "Compra C" }
]

// Timestamps
// "2025-11-20" → 1732060800000
// "2025-11-18" → 1731888000000
// "2025-11-21" → 1732147200000

// Orden descendente (más reciente primero)
// db - da > 0 → b va primero
// Resultado: [
//   { date: "2025-11-21" },  // más reciente
//   { date: "2025-11-20" },
//   { date: "2025-11-18" }   // más antiguo
// ]
```

**Complejidad:**
- Mejor caso: O(n log n)
- Caso promedio: O(n log n)
- Peor caso: O(n log n) - MergeSort
- Peor caso: O(n²) - QuickSort (raro)

---

### 4.2 Ordenamiento Implícito por Índice

**Ubicación:** `FinanceDashboard.tsx` (línea 123)

```typescript
["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#0369a1", "#a78bfa"][i % 6]
```

**Descripción:** Acceso cíclico a array usando módulo para asignar colores.

**Complejidad:** O(1) por acceso

---

## 5. Algoritmos de Filtrado

### 5.1 Filtrado Múltiple en Cascada

**Ubicación:** `TransactionsPage.tsx` (línea 34-41)

**Descripción:** Aplicación secuencial de múltiples filtros sobre un array.

```typescript
const filtered = useMemo(() => {
  let out = items.slice()
  
  // Filtro 1: Por tipo de transacción
  if (kind !== 'all') 
    out = out.filter((it) => it.kind === kind)
  
  // Filtro 2: Por categoría de gasto
  if (category !== 'all') 
    out = out.filter((it) => (it.kind === 'gasto' ? it.type === category : false))
  
  // Filtro 3: Por búsqueda de texto
  if (query.trim()) {
    const q = query.trim().toLowerCase()
    out = out.filter((it) => (it.description || '').toLowerCase().includes(q))
  }
  
  // Ordenamiento final
  out.sort(/* ... */)
  return out
}, [items, query, kind, category, sortDir])
```

**Análisis paso a paso:**

```typescript
// Estado inicial: 100 transacciones
items.length = 100

// Paso 1: Filtrar por kind='gasto'
out = out.filter((it) => it.kind === 'gasto')
// Resultado: 60 transacciones

// Paso 2: Filtrar por category='Alimentación'
out = out.filter((it) => it.type === 'Alimentación')
// Resultado: 15 transacciones

// Paso 3: Filtrar por query='café'
out = out.filter((it) => it.description.toLowerCase().includes('café'))
// Resultado: 3 transacciones

// Paso 4: Ordenar
out.sort(/* ... */)
// Resultado final: 3 transacciones ordenadas
```

**Complejidad:**
- Filtro 1: O(n)
- Filtro 2: O(n)
- Filtro 3: O(n × m) donde m = longitud promedio de descripción
- Ordenamiento: O(n log n)
- **Total:** O(n log n) dominante

**Optimización aplicada:** `useMemo` para evitar recalcular en cada render.

---

### 5.2 Filtrado con Predicado Condicional

**Ubicación:** `TransactionsPage.tsx` (línea 52-54)

```typescript
const inc = items.filter((i) => i.kind === 'ingreso').reduce(...)
const exp = items.filter((i) => i.kind === 'gasto').reduce(...)
const mic = items.filter((i) => i.kind === 'microgasto').reduce(...)
```

**Descripción:** Filtrado por valor exacto de propiedad.

**Complejidad:** O(n) por cada filtro

---

## 6. Algoritmos de Reducción/Agregación

### 6.1 Suma con Reduce

**Ubicación:** `TransactionsPage.tsx` (línea 52-54)

**Descripción:** Algoritmo de reducción para calcular totales por tipo de transacción.

```typescript
const totals = useMemo(() => {
  const n = (v: any) => Number(v)
  const inc = items.filter((i) => i.kind === 'ingreso')
                   .reduce((s, i) => s + n(i.amount), 0)
  const exp = items.filter((i) => i.kind === 'gasto')
                   .reduce((s, i) => s + n(i.amount), 0)
  const mic = items.filter((i) => i.kind === 'microgasto')
                   .reduce((s, i) => s + n(i.amount), 0)
  return { inc, exp, mic, balance: inc - exp }
}, [items])
```

**Funcionamiento del Reduce:**

```typescript
// Ejemplo con datos reales
items = [
  { kind: 'ingreso', amount: 1000 },
  { kind: 'ingreso', amount: 500 },
  { kind: 'gasto', amount: 300 }
]

// Calcular ingresos
items.filter((i) => i.kind === 'ingreso')
// → [{ amount: 1000 }, { amount: 500 }]

.reduce((s, i) => s + Number(i.amount), 0)
// Iteración 1: s=0,    i.amount=1000 → s=1000
// Iteración 2: s=1000, i.amount=500  → s=1500
// Resultado: 1500
```

**Complejidad:**
- Filter: O(n)
- Reduce: O(n)
- **Total por cálculo:** O(n)
- **Total (3 cálculos):** O(3n) = O(n)

**Alternativa optimizada (un solo recorrido):**
```typescript
const totals = items.reduce((acc, item) => {
  const amount = Number(item.amount)
  if (item.kind === 'ingreso') acc.inc += amount
  if (item.kind === 'gasto') acc.exp += amount
  if (item.kind === 'microgasto') acc.mic += amount
  return acc
}, { inc: 0, exp: 0, mic: 0 })
// Complejidad: O(n) - un solo recorrido
```

---

## 7. Algoritmos de Búsqueda

### 7.1 Búsqueda Lineal con Substring

**Ubicación:** `TransactionsPage.tsx` (línea 38-41)

**Descripción:** Búsqueda de texto dentro de descripciones usando algoritmo de substring.

```typescript
if (query.trim()) {
  const q = query.trim().toLowerCase()
  out = out.filter((it) => 
    (it.description || '').toLowerCase().includes(q)
  )
}
```

**Funcionamiento:**

```typescript
// Datos
items = [
  { description: "Café en Starbucks" },
  { description: "Gasolina para auto" },
  { description: "Cafetería central" }
]

query = "café"

// Proceso de búsqueda
q = "café".toLowerCase() // "café"

// Iteración 1
"Café en Starbucks".toLowerCase() // "café en starbucks"
"café en starbucks".includes("café") // true ✓

// Iteración 2
"Gasolina para auto".toLowerCase() // "gasolina para auto"
"gasolina para auto".includes("café") // false ✗

// Iteración 3
"Cafetería central".toLowerCase() // "cafetería central"
"cafetería central".includes("café") // true ✓

// Resultado: 2 elementos encontrados
```

**Complejidad:**
- Por cada elemento: O(m) donde m = longitud de descripción
- Total: O(n × m)
- **Peor caso:** O(n × m) donde n = número de items, m = longitud promedio

**Algoritmo interno de `includes()`:** Boyer-Moore o similar (optimizado en motores JS modernos)

---

### 7.2 Búsqueda por Clave en Objeto

**Ubicación:** `FinanceDashboard.tsx`

```typescript
data.categories["Alimentación"]
```

**Complejidad:** O(1) - Hash table lookup

---

## 8. Algoritmos de Transformación

### 8.1 Map - Transformación de Array

**Ubicación:** Múltiples archivos

```typescript
// Renderizado de listas
items.map((it, i) => (
  <div key={i}>
    {it.description}
  </div>
))

// Transformación de datos
Object.entries(data.categories)
  .map(([name, value]) => ({ name, value }))
```

**Complejidad:** O(n)

---

### 8.2 Transformación Object.entries()

**Ubicación:** `FinanceDashboard.tsx` (línea 115)

```typescript
Object.entries(data.categories || {})
  .map(([name, value]) => ({ name, value }))
```

**Proceso:**
```typescript
// Entrada
categories = {
  "Alimentación": 450,
  "Transporte": 300
}

// Object.entries() - O(n)
[
  ["Alimentación", 450],
  ["Transporte", 300]
]

// .map() - O(n)
[
  { name: "Alimentación", value: 450 },
  { name: "Transporte", value: 300 }
]
```

**Complejidad:** O(n)

---

## 9. Análisis de Complejidad

### 9.1 Resumen de Complejidades por Operación

| Operación | Estructura | Complejidad | Ubicación |
|-----------|-----------|-------------|-----------|
| **Acceso por índice** | Array | O(1) | `data.series[0]` |
| **Búsqueda lineal** | Array | O(n) | `filter()` |
| **Inserción** | Set | O(1) | `set.add()` |
| **Búsqueda** | Set | O(1) | Implícito en `.add()` |
| **Acceso** | Object | O(1) | `categories["key"]` |
| **Ordenamiento** | Array | O(n log n) | `.sort()` |
| **Filtrado** | Array | O(n) | `.filter()` |
| **Reducción** | Array | O(n) | `.reduce()` |
| **Búsqueda substring** | String | O(m) | `.includes()` |
| **Transformación** | Array | O(n) | `.map()` |

---

### 9.2 Análisis de TransactionsPage (Caso Complejo)

**Función:** `filtered` en `TransactionsPage.tsx`

```typescript
const filtered = useMemo(() => {
  let out = items.slice()              // O(n)
  if (kind !== 'all') 
    out = out.filter(...)              // O(n)
  if (category !== 'all') 
    out = out.filter(...)              // O(n)
  if (query.trim()) 
    out = out.filter(...)              // O(n × m)
  out.sort(...)                        // O(n log n)
  return out
}, [items, query, kind, category, sortDir])
```

**Complejidad total:**
- Mejor caso (sin filtros): O(n) + O(n log n) = **O(n log n)**
- Peor caso (todos los filtros): O(n) + O(n) + O(n) + O(n×m) + O(n log n) = **O(n log n + n×m)**

**Donde:**
- n = número de transacciones
- m = longitud promedio de descripción

**Ejemplo práctico:**
- n = 1000 transacciones
- m = 20 caracteres promedio
- Operaciones: ~1000 + ~1000 + ~1000 + ~20,000 + ~10,000 ≈ **33,000 operaciones**

---

### 9.3 Análisis de Dashboard

**Función:** Cálculo de totales por categoría

```typescript
const totals = useMemo(() => {
  const inc = items.filter(...).reduce(...)  // O(n) + O(n)
  const exp = items.filter(...).reduce(...)  // O(n) + O(n)
  const mic = items.filter(...).reduce(...)  // O(n) + O(n)
  return { inc, exp, mic, balance: inc - exp }
}, [items])
```

**Complejidad:** O(6n) = **O(n)**

**Optimización posible:** Un solo `reduce()` → O(n)

---

## 10. Patrones de Optimización Aplicados

### 10.1 Memoización con useMemo

**Propósito:** Evitar recálculos costosos en cada render.

```typescript
const filtered = useMemo(() => {
  // Cálculo costoso: O(n log n)
  return items.filter(...).sort(...)
}, [items, query, kind, category, sortDir])
```

**Beneficio:** Solo recalcula cuando dependencias cambian.

---

### 10.2 Shallow Copy con slice()

```typescript
let out = items.slice()  // O(n) pero necesario
```

**Propósito:** Inmutabilidad - no modificar array original.

---

### 10.3 Short-circuit Evaluation

```typescript
if (kind !== 'all') out = out.filter(...)
```

**Beneficio:** Evita filtrado innecesario si condición es falsa.

---

## 11. Estructuras No Utilizadas (Oportunidades)

### 11.1 Cola (Queue)
**Uso potencial:** Procesar transacciones en orden FIFO
```typescript
// No implementado actualmente
const queue = []
queue.push(transaction)  // Enqueue
queue.shift()            // Dequeue
```

### 11.2 Pila (Stack)
**Uso potencial:** Historial de navegación (undo/redo)
```typescript
// No implementado actualmente
const stack = []
stack.push(state)   // Push
stack.pop()         // Pop
```

### 11.3 Árbol
**Uso potencial:** Jerarquía de categorías/subcategorías
```typescript
// No implementado actualmente
{
  name: "Gastos",
  children: [
    { name: "Alimentación", children: [...] },
    { name: "Transporte", children: [...] }
  ]
}
```

### 11.4 Grafo
**Uso potencial:** Relaciones entre categorías de gastos
```typescript
// No implementado - podría mejorar recomendaciones
```

---

## 12. Conclusiones

### Estructuras Utilizadas (en orden de frecuencia):

1. ✅ **Array** - Estructura principal (90% del código)
2. ✅ **Object (HashMap)** - Categorías y agrupaciones
3. ✅ **Set** - Eliminación de duplicados
4. ❌ **Queue** - No utilizada
5. ❌ **Stack** - No utilizada
6. ❌ **Tree** - No utilizada
7. ❌ **Graph** - No utilizada

### Algoritmos Utilizados:

1. ✅ **Ordenamiento** (MergeSort/QuickSort)
2. ✅ **Filtrado** (Búsqueda lineal)
3. ✅ **Reducción** (Agregación)
4. ✅ **Transformación** (Map)
5. ✅ **Búsqueda** (Substring matching)

### Complejidad General del Sistema:

- **Lectura:** O(1) - localStorage, acceso por índice
- **Procesamiento:** O(n log n) - ordenamiento dominante
- **Renderizado:** O(n) - mapeo de elementos

---

### LoginRequest
Estructura para la solicitud de inicio de sesión.

```typescript
{
  email: string;        // Correo electrónico del usuario (validado como email)
  password: string;     // Contraseña del usuario
}
```

**Uso:** `Login.tsx` - Envío de credenciales al endpoint `/api/auth/login`

**Ejemplo:**
```typescript
{
  email: "usuario@ejemplo.com",
  password: "miPassword123"
}
```

---

### LoginResponse
Estructura de respuesta exitosa del login.

```typescript
{
  token: string;        // JWT token para autenticación
  username: string;     // Nombre de usuario
}
```

**Almacenamiento:**
- `localStorage.setItem("token", token)`
- `localStorage.setItem("username", username)`
- `localStorage.setItem("email", email)`

---

### RegisterRequest
Estructura para el registro de nuevos usuarios.

```typescript
{
  username: string;     // Nombre de usuario único
  email: string;        // Correo electrónico
  password: string;     // Contraseña del usuario
}
```

**Uso:** `Register.tsx` - Creación de nuevas cuentas en `/api/auth/register`

---

## 💰 Transacciones Financieras

### IncomePayload
Estructura para registrar ingresos.

```typescript
{
  amount: number;       // Monto del ingreso (debe ser > 0)
  date: string;         // Fecha en formato ISO (YYYY-MM-DD)
  description: string;  // Descripción del ingreso (ej: "Salario", "Freelance")
  userEmail: string;    // Email del usuario propietario
}
```

**Uso:** `IncomeForm.tsx` - Endpoint: `/api/finance/incomes`

**Ejemplo:**
```typescript
{
  amount: 1500.00,
  date: "2025-11-21",
  description: "Salario mensual",
  userEmail: "usuario@ejemplo.com"
}
```

---

### ExpensePayload
Estructura para registrar gastos.

```typescript
{
  amount: number;       // Monto del gasto (debe ser > 0)
  type: string;         // Categoría del gasto
  date: string;         // Fecha en formato ISO
  description: string;  // Descripción detallada
  recurring: boolean;   // Indica si es un gasto recurrente
  userEmail: string;    // Email del usuario propietario
}
```

**Categorías disponibles:**
- `"Vivienda"` - Alquiler, servicios, mantenimiento
- `"Alimentación"` - Comida, supermercado
- `"Transporte"` - Gasolina, transporte público
- `"Entretenimiento"` - Ocio, suscripciones

**Uso:** `ExpenseForm.tsx` - Endpoint: `/api/finance/expenses`

**Ejemplo:**
```typescript
{
  amount: 450.00,
  type: "Vivienda",
  date: "2025-11-01",
  description: "Alquiler mensual",
  recurring: true,
  userEmail: "usuario@ejemplo.com"
}
```

---

### MicroExpensePayload
Estructura para registrar microgastos (gastos pequeños del día a día).

```typescript
{
  amount: number;       // Monto del microgasto (típicamente < 20)
  date: string;         // Fecha en formato ISO
  description: string;  // Descripción breve (ej: "Café", "Parking")
  userEmail: string;    // Email del usuario propietario
}
```

**Uso:** `MicroExpensePage.tsx` - Endpoint: `/api/finance/microexpenses`

**Ejemplo:**
```typescript
{
  amount: 3.50,
  date: "2025-11-21",
  description: "Café",
  userEmail: "usuario@ejemplo.com"
}
```

---

### Transaction (TItem)
Estructura unificada que representa cualquier transacción financiera.

```typescript
{
  id?: string;                              // ID único (opcional)
  amount: number | string;                  // Monto de la transacción
  date: string;                             // Fecha ISO
  description: string;                      // Descripción
  userId?: string;                          // ID del usuario (opcional)
  kind: 'ingreso' | 'gasto' | 'microgasto'; // Tipo de transacción
  type?: string | null;                     // Categoría (solo para gastos)
  recurring?: boolean;                      // Si es recurrente (solo gastos)
}
```

**Uso:** `TransactionsPage.tsx` - Para mostrar el historial completo

**Ejemplo:**
```typescript
{
  id: "txn_123",
  amount: 75.00,
  date: "2025-11-20",
  description: "Compra en supermercado",
  kind: "gasto",
  type: "Alimentación",
  recurring: false
}
```

---

## 📊 Dashboard y Métricas

### DashboardRequest
Parámetros para obtener los datos del dashboard.

```typescript
{
  userEmail: string;    // Email del usuario
  year: number;         // Año a consultar (ej: 2025)
  month: number;        // Mes a consultar (1-12)
}
```

**Uso:** `FinanceDashboard.tsx` - Endpoint: `/api/finance/dashboard`

---

### DashboardResponse
Estructura completa de respuesta del dashboard con todas las métricas.

```typescript
{
  // Métricas principales del mes actual
  income: number;                    // Total de ingresos
  expense: number;                   // Total de gastos
  balance: number;                   // Balance (ingresos - gastos)
  ratio: number;                     // Ratio gasto/ingreso (0.0 - 1.0)
  
  // Serie histórica de últimos 6 meses
  series: Array<{
    month: string;                   // Nombre del mes (ej: "Enero")
    income: number;                  // Ingresos del mes
    expense: number;                 // Gastos del mes
    micro?: number;                  // Microgastos del mes (opcional)
  }>;
  
  // Distribución por categorías (mes actual)
  categories: {
    [category: string]: number;      // Ej: { "Alimentación": 250.00 }
  };
  
  // Recomendaciones generadas
  recommendations: Array<{
    id: string;                      // ID único de la recomendación
    type: string;                    // Tipo: "ahorro", "alerta", "consejo"
    description: string;             // Texto de la recomendación
    potentialSavings?: string;       // Ahorro potencial (opcional)
  }>;
}
```

**Uso:** `FinanceDashboard.tsx` - Para visualizar métricas y gráficos

**Ejemplo:**
```typescript
{
  income: 2500.00,
  expense: 1800.00,
  balance: 700.00,
  ratio: 0.72,
  series: [
    { month: "Junio", income: 2300, expense: 1600, micro: 150 },
    { month: "Julio", income: 2400, expense: 1700, micro: 120 },
    // ... más meses
  ],
  categories: {
    "Vivienda": 800.00,
    "Alimentación": 450.00,
    "Transporte": 300.00,
    "Entretenimiento": 250.00
  },
  recommendations: [
    {
      id: "rec_1",
      type: "ahorro",
      description: "Podrías reducir gastos en Entretenimiento",
      potentialSavings: "$100/mes"
    }
  ]
}
```

---

### ChartDataPoint
Estructura para datos de gráficos (usada en Recharts).

```typescript
{
  month: string;        // Etiqueta del mes
  income: number;       // Valor de ingresos
  expense: number;      // Valor de gastos
  micro?: number;       // Valor de microgastos (opcional)
}
```

---

### CategoryData
Estructura para el gráfico de pastel de categorías.

```typescript
{
  name: string;         // Nombre de la categoría
  value: number;        // Monto total en esa categoría
}
```

---

## 🤖 Análisis Inteligente (NimAi)

### NimAiRequest
Parámetros para obtener análisis inteligente.

```typescript
{
  userEmail: string;    // Email del usuario
  year: number;         // Año a analizar
  month: number;        // Mes a analizar
}
```

**Endpoints:**
- `/api/finance/nimai` - Análisis básico
- `/api/finance/nimai6` - Análisis de 6 meses

---

### NimAi6Response
Respuesta completa del análisis de 6 meses.

```typescript
{
  // Consejos personalizados generados por IA
  tips: string[];                    // Array de consejos (ej: "Reduce gastos en cafetería")
  
  // Datos mensuales de últimos 6 meses
  months: Array<{
    year: number;                    // Año (ej: 2025)
    month: number;                   // Mes (1-12)
    income: number;                  // Total de ingresos
    expense: number;                 // Total de gastos
    micro: number;                   // Total de microgastos
  }>;
  
  // Tendencias por categoría
  trends: Array<{
    category: string;                // Nombre de la categoría
    trend: 'subiendo' | 'bajando' | 'estable'; // Dirección de la tendencia
    prev3: number;                   // Promedio 3 meses anteriores
    last3: number;                   // Promedio 3 meses recientes
  }>;
}
```

**Uso:** `NimAi.tsx` - Para mostrar análisis predictivo y consejos

**Ejemplo:**
```typescript
{
  tips: [
    "Tus gastos en Alimentación están 20% por encima del promedio",
    "Has ahorrado $300 este mes, ¡bien hecho!",
    "Considera revisar tus suscripciones de Entretenimiento"
  ],
  months: [
    { year: 2025, month: 6, income: 2300, expense: 1600, micro: 150 },
    { year: 2025, month: 7, income: 2400, expense: 1700, micro: 120 },
    // ... 4 meses más
  ],
  trends: [
    {
      category: "Alimentación",
      trend: "subiendo",
      prev3: 380.50,
      last3: 456.20
    },
    {
      category: "Transporte",
      trend: "estable",
      prev3: 295.00,
      last3: 300.00
    }
  ]
}
```

---

## 🎨 Estructuras de UI y Estado

### FilterState (TransactionsPage)
Estado para filtros de transacciones.

```typescript
{
  query: string;                              // Búsqueda por descripción
  kind: 'all' | 'ingreso' | 'gasto' | 'microgasto'; // Filtro por tipo
  category: 'all' | string;                   // Filtro por categoría
  sortDir: 'desc' | 'asc';                    // Dirección de ordenamiento
}
```

---

### TransactionTotals
Totales calculados para el historial de transacciones.

```typescript
{
  inc: number;          // Total de ingresos
  exp: number;          // Total de gastos
  mic: number;          // Total de microgastos
  balance: number;      // Balance neto (inc - exp)
}
```

---

### FormState
Estado genérico para formularios de la aplicación.

```typescript
{
  loading: boolean;                   // Indica si hay una operación en curso
  msg: string | null;                 // Mensaje de feedback
  msgType: 'success' | 'error' | null; // Tipo de mensaje
}
```

---

### ErrorResponse
Estructura de respuesta de errores del backend.

```typescript
{
  error?: string;                     // Mensaje de error principal
  message?: string;                   // Mensaje alternativo
  fieldErrors?: Array<{               // Errores de validación de campos
    field: string;                    // Nombre del campo
    message: string;                  // Mensaje de error
  }>;
}
```

**Ejemplo:**
```typescript
{
  error: "Validación fallida",
  fieldErrors: [
    { field: "amount", message: "debe ser mayor que 0" },
    { field: "date", message: "es requerido" }
  ]
}
```

---

## 🔄 Flujo de Datos

### 1. Autenticación
```
Usuario → Login Form → POST /api/auth/login → LoginResponse → localStorage
```

### 2. Registro de Ingreso
```
Usuario → IncomeForm → POST /api/finance/incomes → Actualización → GET /api/finance/transactions
```

### 3. Registro de Gasto
```
Usuario → ExpenseForm → POST /api/finance/expenses → Actualización → GET /api/finance/transactions
```

### 4. Visualización Dashboard
```
Usuario → FinanceDashboard → GET /api/finance/dashboard → DashboardResponse → Gráficos (Recharts)
```

### 5. Análisis Inteligente
```
Usuario → NimAi → GET /api/finance/nimai6 → NimAi6Response → Tips y Tendencias
```

---

## 📦 Almacenamiento Local

### localStorage Keys
Datos persistidos en el navegador:

```typescript
{
  "token": string;      // JWT de autenticación
  "username": string;   // Nombre de usuario
  "email": string;      // Email del usuario
}
```

**Acceso:**
```typescript
const token = localStorage.getItem('token')
const userEmail = localStorage.getItem('email') || localStorage.getItem('username') || ''
```

---

## 🛠️ Utilidades y Helpers

### authHeaders()
Función helper para incluir el token de autenticación.

```typescript
function authHeaders(): HeadersInit {
  const token = localStorage.getItem('token')
  return token 
    ? { Authorization: `Bearer ${token}` } 
    : {}
}
```

---

### parseError()
Función para parsear errores del backend.

```typescript
async function parseError(res: Response): Promise<string> {
  try {
    const err = await res.json()
    return err.error || err.message || `Error ${res.status}`
  } catch {
    const txt = await res.text()
    return txt || `Error ${res.status}`
  }
}
```

---

## 📝 Notas Importantes

### Validaciones Frontend
- **amount**: Debe ser > 0, acepta decimales (step="0.01")
- **date**: Formato ISO (YYYY-MM-DD), campo requerido
- **email**: Validación HTML5 de email
- **description**: Campo de texto requerido

### Tipos de Datos
- **Números**: Siempre se convierten con `Number()` antes de enviar al backend
- **Fechas**: Formato ISO string (YYYY-MM-DD)
- **Booleanos**: Para `recurring` en gastos

### Categorías de Gastos
Valores predefinidos en el frontend:
1. Vivienda
2. Alimentación
3. Transporte
4. Entretenimiento

---

## 🔗 API Base URL

```typescript
export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'
```

**Variable de entorno:** `VITE_API_BASE` (configurar en `.env`)

---

## 📚 Bibliotecas de Visualización

### Recharts - Componentes Utilizados

**LineChart** - Tendencias mensuales
```typescript
<LineChart data={series}>
  <Line dataKey="income" stroke="#10b981" />
  <Line dataKey="expense" stroke="#ef4444" />
  <Line dataKey="micro" stroke="#06b6d4" />
</LineChart>
```

**PieChart** - Distribución por categorías
```typescript
<PieChart>
  <Pie 
    data={categoriesArray} 
    dataKey="value" 
    nameKey="name" 
    innerRadius={60} 
    outerRadius={110} 
  />
</PieChart>
```

---

## 🎯 Patrones de Diseño Identificados

1. **Repository Pattern**: API abstraída en `finance.ts` y `client.ts`
2. **Component State Management**: Uso de hooks (`useState`, `useEffect`)
3. **Error Handling**: Try-catch consistente con feedback al usuario
4. **Loading States**: Indicadores de carga en todas las operaciones asíncronas
5. **Optimistic Updates**: Actualización inmediata tras operaciones exitosas

---

## 👥 Contribuidores

Este proyecto ha sido desarrollado por:

- **Alejandro Bastidas** - [@AlejandroBast](https://github.com/AlejandroBast) - *Owner del repositorio*
- **Miguel Peña** - [@miikeepp](https://github.com/miikeepp) - *Contribuidor*
- **Benavides** - [@benavides17](https://github.com/benavides17) - *Contribuidor*

---

**Última actualización:** 21 de noviembre de 2025  
**Versión del documento:** 2.0 - Estructuras de Datos Algorítmicas
