import axios from 'axios';

export async function createLead(leadData: any) {
  try {
    const { name, email, phone, company, cnpj } = leadData;

    const auth = await axios.post(
      'https://api-auth.rezultz.com.br/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: '45oeothip7dekqhj7ppia7bbcf',
        client_secret: '14bfnibalt9a9lrike4echvmsbt7u1gam4p7qgujbuh3va13mutf',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    const token = auth.data.access_token;

    const response = await axios.post(
      'https://api.rezultz.com.br/lead',
      {
        type: 'buyer',
        referer: 'Formulário Site',
        fingerprintId: '123',
        policyAccept: true,
        contact: {
          name,
          email,
          mobile: phone,
        },
        company: {
          name: company,
          document: cnpj,
        },
        creditInfo: {
          availableLimit: 0,
          requestLimit: 0,
          availableTerm: 0,
          requestTerm: 0,
        },
        seller: {
          name: company,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Erro dentro do createLead:', error.response?.data || error.message || error);
    throw error;
  }
}
