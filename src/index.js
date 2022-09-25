import { validate } from "schema-utils";
import schema from "./options.json";

// 调用 schema-utils 完成校验
export default function loader(source) {
    const options = this.getOptions();
    validate(schema, options);

    return source;
}

// // Webpack5 之后还可以借助 Loader Context 的 `getOptions` 接口完成校验
// export default function loader(source) {
//     const options = this.getOptions(schema);
//
//     return source;
// }
