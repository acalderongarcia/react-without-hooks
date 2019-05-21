export = index;
declare class index {
    static defaultProps: {
        cdnUrl: string;
        svg: boolean;
    };
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
declare namespace index {
    namespace propTypes {
        function cdnUrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace cdnUrl {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function code(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function styleProps(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace styleProps {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function svg(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace svg {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
