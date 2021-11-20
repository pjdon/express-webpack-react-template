import React from 'react';

console.log("proc", process.env);

export default function App() {
  return <div>Hello World! TEST_VAL: {process.env.TEST_VAL}</div>;
}