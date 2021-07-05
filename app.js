var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  autoStart: true,
});

typewriter
  .typeString("Hello World!")
  .pauseFor(2500)
  .deleteAll()
  .typeString(
    `"S     passages, and more recently with desktop publishing software like
  Aldus PageMaker including versions of Lorem Ipsum. Reveal Here Content
  dummy text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. It has survived
  not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in
  the 1960s with the release of Letraset sheets containing Lorem Ipsum
  passages, and more recently with desktop publishing software like
  Aldus PageMaker including versions of Lorem Ipsum. Reveal Here Content
  dummy text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. It has survived
  not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in
  the 1960s with the release of Letraset sheets containing Lorem Ipsum"`
  )
  .typeString("<strong>altered!</strong>")
  .pauseFor(2500)
  .start();

iziToast.show({
  title: "Hey",
  message: "What would you like to add?",
});
