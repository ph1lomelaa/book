(function() {
  // Проверяем есть ли api_url в параметрах URL
  const urlParams = new URLSearchParams(window.location.search);
  const apiUrlParam = urlParams.get('api_url');
  const defaultApiUrl = apiUrlParam || 'https://marxist-noell-uslima2005-12a246c3.koyeb.app';

  if (!window.BULL_API_URL) {
    window.BULL_API_URL = defaultApiUrl;
  }

  // Для отладки
  console.log('🌐 BULL_API_URL:', window.BULL_API_URL);
})();
