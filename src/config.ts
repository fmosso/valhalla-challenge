export default {
    imdbUrl: process.env.IMDB_API_URL ?? '',
    imdbApiKey: process.env.IMDB_API_KEY ?? '',
    loggerInfo: process.env.LOGEER_LEVEL ?? 'warning'
}