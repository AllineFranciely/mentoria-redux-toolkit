const getSnapshot = async (url, timestamp) => {
  try {
    const fetchResult = await fetch(`https://archive.org/wayback/available?url=${url}&timestamp=${timestamp}`);
    const apiResult = await fetchResult.json();
    if (apiResult?.archived_snapshots?.closest) {
      return apiResult;
    }
    throw new Error('Não foi possível encontrar resultados para a sua pesquisa');
  } catch (error) {
    throw new Error(error.message
      || 'Não foi possível encontrar resultados para a sua pesquisa');
  }
};

export default getSnapshot;
