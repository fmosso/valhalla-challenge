import {  transports, createLogger, format } from "winston";
import config from "./config";


const customFormat = format.combine(
  format.label({ label: 'Valhalla' }),
  format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  })
)

const logger = createLogger({
    level: config.loggerInfo,
    format:  customFormat,
    transports: [ new transports.Console()] ,
  })
   
export default logger