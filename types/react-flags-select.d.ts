export = index;
declare class index {
    static defaultProps: {
        alignOptions: string;
        blackList: boolean;
        customLabels: {};
        disabled: boolean;
        optionsSize: number;
        placeholder: string;
        searchPlaceholder: string;
        searchable: boolean;
        selectedSize: number;
        showOptionLabel: boolean;
        showSelectedLabel: boolean;
    };
    constructor(props: any);
    closeOptions(event: any): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    filterSearch(evt: any): void;
    forceUpdate(callback: any): void;
    onSelect(countryCode: any): void;
    onSelectWithKeyboard(evt: any, countryCode: any): void;
    render(): any;
    setCountries(): void;
    setState(partialState: any, callback: any): void;
    toggleOptions(): void;
    toggleOptionsWithKeyboard(evt: any): void;
    updateSelected(countryCode: any): void;
}
declare namespace index {
    namespace propTypes {
        function alignOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace alignOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function blackList(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace blackList {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function countries(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace countries {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function customLabels(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace customLabels {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function defaultCountry(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultCountry {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace disabled {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onSelect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onSelect {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function optionsSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace optionsSize {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function placeholder(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace placeholder {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function searchPlaceholder(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace searchPlaceholder {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function searchable(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace searchable {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function selectedSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace selectedSize {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function showOptionLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace showOptionLabel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function showSelectedLabel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace showSelectedLabel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
