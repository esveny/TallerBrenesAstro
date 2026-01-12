export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { token } = await request.json();
    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: "Token no proporcionado" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const secretKey = "6LejXDosAAAAAGCjd_ML8xszn1ujzoadCL87XpIW";
    if (!secretKey) ;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const verificationResponse = await fetch(verificationURL, {
      method: "POST"
    });
    const verificationData = await verificationResponse.json();
    if (verificationData.success) {
      return new Response(
        JSON.stringify({ success: true, message: "reCAPTCHA verificado correctamente" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Verificación de reCAPTCHA fallida",
          details: verificationData["error-codes"]
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error verificando reCAPTCHA:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Error del servidor al verificar reCAPTCHA" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
