import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { token } = await request.json();

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: 'Token no proporcionado' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verificar el token con Google
    const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY no está configurada');
      return new Response(
        JSON.stringify({ success: false, error: 'Configuración del servidor incorrecta' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    const verificationResponse = await fetch(verificationURL, {
      method: 'POST',
    });

    const verificationData = await verificationResponse.json();

    if (verificationData.success) {
      return new Response(
        JSON.stringify({ success: true, message: 'reCAPTCHA verificado correctamente' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Verificación de reCAPTCHA fallida',
          details: verificationData['error-codes'] 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error verificando reCAPTCHA:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Error del servidor al verificar reCAPTCHA' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
