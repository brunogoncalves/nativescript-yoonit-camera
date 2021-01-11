import "reflect-metadata";
declare class Validator {
    static RegexColor: RegExp;
    static RegexPercentage: RegExp;
    static RegexNumber: RegExp;
    static RegexPX: RegExp;
    static PropMap: Array<{
        name: string;
        value: any;
    }>;
    private static getErrorMessage;
    static Required(target: Object, propertyKey: string | symbol, parameterIndex: number): void;
    static ValidateProps(propName: String, option: Array<String | Number | Boolean | RegExp> | RegExp): Function;
    static PercentageToNumber(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>): void;
    static NumberToPixel(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>): void;
}
export default Validator;