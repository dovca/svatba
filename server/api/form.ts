import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "david.ovcacik@gmail.com",
        pass: config.gmailPassword,
      },
    });

    await transport.sendMail({
      from: '"David Ovčačík" <david.ovcacik@gmail.com>',
      to: "david.ovcacik+svatba@gmail.com, schneiderovaev+svatba@gmail.com",
      subject: "Noví svatebčani",
      html: `
      <h1>Noví svatebčani</h1>
      <table>
        <tbody>
          <tr>
            <td>Jméno:</td>
            <td>${body.name}</td>
          </tr>
          <tr>
            <td>Počet lidí:</td>
            <td>${body.personCount}</td>
          </tr>
          <tr>
            <td>Vegetarián:</td>
            <td>${body.vegetarian ? "Ano" : "Ne"}</td>
          </tr>
          <tr>
            <td>Bez lepku:</td>
            <td>${body.glutenFree ? "Ano" : "Ne"}</td>
          </tr>
          <tr>
            <td>Ubytování:</td>
            <td>${body.accommodation ? "Ano" : "Ne"}</td>
          </tr>
          <tr>
            <td>Poznámka:</td>
            <td>${body.note}</td>
          </tr>
        </tbody>
      </table>
    `,
    });

    return { message: "OK" };
  } catch (error) {
    console.error(error);
    throw createError({ status: 500, message: "Failed to send email.", cause: error });
  }
});
