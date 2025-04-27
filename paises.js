const paises = [
  {
    nome: 'África do Sul',
    codigo: 'za',
    utc: 'UTC+2',
    timezones: [
      { cidade: 'Johannesburg', tz: 'Africa/Johannesburg', utc: 'UTC+2', principal: true }
    ]
  },
  {
    nome: 'Alemanha',
    codigo: 'de',
    utc: 'UTC+1',
    timezones: [
      { cidade: 'Berlim', tz: 'Europe/Berlin', utc: 'UTC+1', principal: true }
    ]
  },
  {
    nome: 'Argentina',
    codigo: 'ar',
    utc: 'UTC-3',
    timezones: [
      { cidade: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires', utc: 'UTC-3', principal: true }
    ]
  },
  {
    nome: 'Arábia Saudita',
    codigo: 'sa',
    utc: 'UTC+3',
    timezones: [
      { cidade: 'Riyadh', tz: 'Asia/Riyadh', utc: 'UTC+3', principal: true }
    ]
  },
  {
    nome: 'Austrália',
    codigo: 'au',
    utc: 'UTC+10',
    timezones: [
      { cidade: 'Sydney', tz: 'Australia/Sydney', utc: 'UTC+10', principal: true },
      { cidade: 'Adelaide', tz: 'Australia/Adelaide', utc: 'UTC+9:30' },
      { cidade: 'Darwin', tz: 'Australia/Darwin', utc: 'UTC+9:30' },
      { cidade: 'Perth', tz: 'Australia/Perth', utc: 'UTC+8' },
      { cidade: 'Brisbane', tz: 'Australia/Brisbane', utc: 'UTC+10' },
      { cidade: 'Hobart', tz: 'Australia/Hobart', utc: 'UTC+10' }
    ]
  },
  {
    nome: 'Brasil',
    codigo: 'br',
    utc: 'UTC-3',
    timezones: [
      { cidade: 'Brasília', tz: 'America/Sao_Paulo', utc: 'UTC-3', principal: true },
      { cidade: 'Manaus', tz: 'America/Manaus', utc: 'UTC-4' },
      { cidade: 'Rio Branco', tz: 'America/Rio_Branco', utc: 'UTC-5' }
    ]
  },
  {
    nome: 'Canadá',
    codigo: 'ca',
    utc: 'UTC-5',
    timezones: [
      { cidade: 'Toronto', tz: 'America/Toronto', utc: 'UTC-5', principal: true },
      { cidade: 'St. Johns', tz: 'America/St_Johns', utc: 'UTC-3:30' },
      { cidade: 'Halifax', tz: 'America/Halifax', utc: 'UTC-4' },
      { cidade: 'Winnipeg', tz: 'America/Winnipeg', utc: 'UTC-6' },
      { cidade: 'Edmonton', tz: 'America/Edmonton', utc: 'UTC-7' },
      { cidade: 'Vancouver', tz: 'America/Vancouver', utc: 'UTC-8' }
    ]
  },
  {
    nome: 'China',
    codigo: 'cn',
    utc: 'UTC+8',
    timezones: [
      { cidade: 'Pequim', tz: 'Asia/Shanghai', utc: 'UTC+8', principal: true }
    ]
  },
  {
    nome: 'Espanha',
    codigo: 'es',
    utc: 'UTC+1',
    timezones: [
      { cidade: 'Madri', tz: 'Europe/Madrid', utc: 'UTC+1', principal: true },
      { cidade: 'Ilhas Canárias', tz: 'Atlantic/Canary', utc: 'UTC+0' }
    ]
  },
  {
    nome: 'Estados Unidos',
    codigo: 'us',
    utc: 'UTC-5',
    timezones: [
      { cidade: 'Nova York', tz: 'America/New_York', utc: 'UTC-5', principal: true },
      { cidade: 'Chicago', tz: 'America/Chicago', utc: 'UTC-6' },
      { cidade: 'Denver', tz: 'America/Denver', utc: 'UTC-7' },
      { cidade: 'Los Angeles', tz: 'America/Los_Angeles', utc: 'UTC-8' },
      { cidade: 'Anchorage', tz: 'America/Anchorage', utc: 'UTC-9' },
      { cidade: 'Honolulu', tz: 'Pacific/Honolulu', utc: 'UTC-10' }
    ]
  },
  {
    nome: 'França',
    codigo: 'fr',
    utc: 'UTC+1',
    timezones: [
      { cidade: 'Paris', tz: 'Europe/Paris', utc: 'UTC+1', principal: true }
    ]
  },
  {
    nome: 'Índia',
    codigo: 'in',
    utc: 'UTC+5:30',
    timezones: [
      { cidade: 'Nova Délhi', tz: 'Asia/Kolkata', utc: 'UTC+5:30', principal: true }
    ]
  },
  {
    nome: 'Indonésia',
    codigo: 'id',
    utc: 'UTC+7',
    timezones: [
      { cidade: 'Jacarta', tz: 'Asia/Jakarta', utc: 'UTC+7', principal: true },
      { cidade: 'Makassar', tz: 'Asia/Makassar', utc: 'UTC+8' },
      { cidade: 'Jayapura', tz: 'Asia/Jayapura', utc: 'UTC+9' }
    ]
  },
  {
    nome: 'Itália',
    codigo: 'it',
    utc: 'UTC+1',
    timezones: [
      { cidade: 'Roma', tz: 'Europe/Rome', utc: 'UTC+1', principal: true }
    ]
  },
  {
    nome: 'Japão',
    codigo: 'jp',
    utc: 'UTC+9',
    timezones: [
      { cidade: 'Tóquio', tz: 'Asia/Tokyo', utc: 'UTC+9', principal: true }
    ]
  },
  {
    nome: 'México',
    codigo: 'mx',
    utc: 'UTC-6',
    timezones: [
      { cidade: 'Cidade do México', tz: 'America/Mexico_City', utc: 'UTC-6', principal: true },
      { cidade: 'Cancún', tz: 'America/Cancun', utc: 'UTC-5' },
      { cidade: 'Chihuahua', tz: 'America/Chihuahua', utc: 'UTC-7' },
      { cidade: 'Tijuana', tz: 'America/Tijuana', utc: 'UTC-8' }
    ]
  },
  {
    nome: 'Nova Zelândia',
    codigo: 'nz',
    utc: 'UTC+12',
    timezones: [
      { cidade: 'Auckland', tz: 'Pacific/Auckland', utc: 'UTC+12', principal: true },
      { cidade: 'Chatham', tz: 'Pacific/Chatham', utc: 'UTC+12:45' }
    ]
  },
  {
    nome: 'Reino Unido',
    codigo: 'gb',
    utc: 'UTC+0',
    timezones: [
      { cidade: 'Londres', tz: 'Europe/London', utc: 'UTC+0', principal: true }
    ]
  },
  {
    nome: 'Rússia',
    codigo: 'ru',
    utc: 'UTC+3',
    timezones: [
      { cidade: 'Moscou', tz: 'Europe/Moscow', utc: 'UTC+3', principal: true },
      { cidade: 'Kaliningrado', tz: 'Europe/Kaliningrad', utc: 'UTC+2' },
      { cidade: 'Yekaterinburg', tz: 'Asia/Yekaterinburg', utc: 'UTC+5' },
      { cidade: 'Novosibirsk', tz: 'Asia/Novosibirsk', utc: 'UTC+7' },
      { cidade: 'Krasnoyarsk', tz: 'Asia/Krasnoyarsk', utc: 'UTC+7' },
      { cidade: 'Irkutsk', tz: 'Asia/Irkutsk', utc: 'UTC+8' },
      { cidade: 'Yakutsk', tz: 'Asia/Yakutsk', utc: 'UTC+9' },
      { cidade: 'Vladivostok', tz: 'Asia/Vladivostok', utc: 'UTC+10' },
      { cidade: 'Magadan', tz: 'Asia/Magadan', utc: 'UTC+11' },
      { cidade: 'Kamchatka', tz: 'Asia/Kamchatka', utc: 'UTC+12' }
    ]
  }
]; 