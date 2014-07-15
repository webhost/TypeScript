//// [declareFileExportAssignment.ts]
module m2 {
    export interface connectModule {
        (res, req, next): void;
    }
    export interface connectExport {
        use: (mod: connectModule) => connectExport;
        listen: (port: number) => void;
    }

}

var m2: {
    (): m2.connectExport;
    test1: m2.connectModule;
    test2(): m2.connectModule;
};

export = m2;

//// [declareFileExportAssignment.js]
var m2;
module.exports = m2;


//// [declareFileExportAssignment.d.ts]
declare module m2 {
    interface connectModule {
        (res, req, next);
    }
    interface connectExport {
        use;
        listen;
    }
}
declare var m2;
export = m2;