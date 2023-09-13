import "/src/styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contato</h2>
      <form
        action="https://formsubmit.co/70f33b412879d20cb058a9d671f96810"
        method="POST">
        <input type="text" name="Nome" placeholder="Nome" />
        <input type="email" name="Email" placeholder="Email" />
        <textarea placeholder="Assunto" name="Menssagem"></textarea>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/contact/thanks"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
