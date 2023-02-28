let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  // лучше использовать WeakSet
  // когда сообщение удалится, то и из WeakSet исчезнет и не будет занимать память
  // плюс не будет записываться несколько раз, т.к. все значения уникальны