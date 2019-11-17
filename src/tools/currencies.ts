
interface Currency {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  price_btc: string;
  last_updated: string;
}

export async function getAll(limit: number = 10): Promise<Currency[]> {
  try {
    const uri = `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`;
    const response = await fetch(uri);
    const responseJson = await response.json();

    return responseJson;
  } catch (e) { 
    console.warn('err', e);
  }
}
