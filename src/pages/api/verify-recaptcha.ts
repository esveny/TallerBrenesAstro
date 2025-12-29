import type { APIRoute } from 'astro';

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
      // reCAPTCHA v3 retorna un score (0.0 - 1.0)
      // 0.0 = muy probablemente un bot
      // 1.0 = muy probablemente humano
      const score = verificationData.score || 0;
      
      // Establecer umbral mínimo de 0.5 (ajustable según tus necesidades)
      if (score >= 0.5) {
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'reCAPTCHA verificado correctamente',
            score: score 
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Puntuación de reCAPTCHA demasiado baja',
            score: score 
          }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
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
