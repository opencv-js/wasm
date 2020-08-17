import { int } from './_types';
export declare class Logger {
    static error(fmt: any, arg121: any): int;
    static fatal(fmt: any, arg122: any): int;
    static info(fmt: any, arg123: any): int;
    /**
     *   Print log message
     *
     * @param level Log level
     *
     * @param fmt Message format
     */
    static log(level: int, fmt: any, arg124: any): int;
    /**
     *   Sets the logging destination
     *
     * @param name Filename or NULL for console
     */
    static setDestination(name: any): void;
    /**
     *   Sets the logging level. All messages with lower priority will be ignored.
     *
     * @param level Logging level
     */
    static setLevel(level: int): void;
    static warn(fmt: any, arg125: any): int;
}
