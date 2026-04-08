import './style.css'
//import './topics/01-basic-types';
//import './topics/02-object-interface'
//import './topics/03-functions'
//import './topics/07-modules'
//import './topics/08-classes'
//import './topics/09-generics'
//import './topics/10-decorators'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Recently attended a Java + Spring Boot interview (3–4 yrs experience). Sharing some key questions that were asked:

• HashMap → key-value, hashing, not thread-safe
• HashMap vs ArrayList vs HashSet → map vs list vs unique set
• @Primary vs @Qualifier → default bean vs specific bean
• Consumer vs Supplier → input/no return vs no input/returns
• Java 8 → Lambda, Streams, Functional Interfaces
• Functional Interface → single abstract method
• Exception Handling → try-catch-finally
• Concurrent Modification → modifying during iteration
• Lazy Loading → loads only when needed

• equals() vs hashCode() → content vs hash logic
• String vs StringBuilder vs StringBuffer → immutable vs mutable vs thread-safe
• Multithreading & Synchronization → parallel execution + control
• volatile → visibility across threads
• @Transactional → DB transaction management
• Lazy vs Eager → on-demand vs immediate loading
• N+1 problem → multiple unnecessary DB queries

• @RestController vs @Controller → JSON vs view
• Global Exception Handling → @ControllerAdvice
• JVM memory → Heap, Stack
• Garbage Collection → automatic cleanup

• Coding: Group Anagrams → [eat, tea, ate], [tan, nat], [bat]

Good focus on core Java, collections, and Spring Boot fundamentals.`;

console.log('Hola mundo!!!!..');
