// Must be a client component because we pass function in the beforetoolbarcreated param
"use client"
import * as React from "react";
// Types are static, so we can safely import it for use in references
import type { Pivot } from "react-flexmonster";
import { Report, Slice, DataSource, Options, Format } from "flexmonster";
import dynamic from "next/dynamic";
// localdataPath(json)
import data_source_test from "@/UIElements/source/testdata_full_out.json";
import { json } from "stream/consumers";


// Wrapper must be imported dynamically, since it contains Flexmonster pivot
const PivotWrap = dynamic(() => import('@/UIElements/PivotWrapper'), {
    ssr: false,
    loading: () => <h1>Loading Flexmonster...</h1>
});

// Forward ref because PivotWrap is imported dynamically and we need to pass a ref to it
const ForwardRefPivot = React.forwardRef<Pivot, Flexmonster.Params>((props, ref?: React.ForwardedRef<Pivot>) =>
    <PivotWrap {...props} pivotRef={ref} />
);

//
const reportTestDatasource: DataSource = {
    type: "json",
    data: getData(),
    mapping: {
        customer_id: {
            type: "string"
        },
        device_id: {
            "type": "string"
        },
        tracking_id: {
            "type": "string"
        },
        age: {
            "type": "number"
        },
        gender: {
            "type": "string"
        },
        mask: {
            "type": "string"
        },
        timestamp: {
            "type": "datetime"
        },
        watch_start_time: {
            "type": "datetime"
        },
        watch_time: {
            "type": "number"
        },
        stay_time: {
            "type": "number"
        },
        max_watch_duration: {
            "type": "number"
        }
    },
}

const reportTestOptions: Options = {
    timePattern: "yyyy-MM-dd hh:mm:ss",
    chart: {
        type: "column_line",
        title: "Chart for SampleData",
    },
    grid:{
        type: "flat",
        grandTotalsPosition: "top"
    }
}

const reportTestFormat: Format = {
            thousandsSeparator: ",",
            decimalSeparator: ".",
            decimalPlaces: 0,
            textAlign: "right",
            isPercent: false
}

const reportTestSlice: Slice = {
    rows: [
        {
            uniqueName: "watch_start_time",
            sort: "asc"
        },
        {
            uniqueName: "gender",
            sort: "asc"
        },
        {
            uniqueName: "age",
            sort: "asc",
            filter: {
                query: {
                    "not_equal": -1,
                }
            }
        }
    ],
    columns: [
        {
            uniqueName: "[Measures]"
        }
    ],
    measures: [
        {
            uniqueName: "stay_time"
        },
        {
            uniqueName: "max_watch_duration"
        }
    ]
}

const reportTest: Report = {
    dataSource:reportTestDatasource,
    slice:reportTestSlice,
    options: reportTestOptions,
    formats: [
        reportTestFormat,
    ]
}

const report_test2 ={
    type: "json",
    //"filename": {data_source_test},
    //filename: "https://cdn.flexmonster.com/data/data.json",
    data: getData(),
    mapping: {
        "customer_id": {
            "type": "string"
        },
        "device_id": {
            "type": "string"
        },
        "tracking_id": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "gender": {
            "type": "string"
        },
        "mask": {
            "type": "string"
        },
        "timestamp": {
            "type": "datetime"
        },
        "watch_start_time": {
            "type": "datetime"
        },
        "watch_time": {
            "type": "number"
        },
        "stay_time": {
            "type": "number"
        },
        "max_watch_duration": {
            "type": "number"
        }
    },
    "slice": {
        rows: [
            {
                uniqueName: "watch_start_time",
                sort: "asc"
            },
            {
                uniqueName: "gender",
                sort: "asc"
            },
            {
                uniqueName: "age",
                sort: "asc",
                filter: {
                    query: {
                        "not_equal": -1,
                    }
                }
            }
        ],
        columns: [
            {
                uniqueName: "[Measures]"
            }
        ],
        measures: [
            {
                uniqueName: "stay_time"
            },
            {
                uniqueName: "max_watch_duration"
            }
        ]
    },
    options: {
        timePattern: "yyyy-MM-dd hh:mm:ss",
        chart: {
            type: "column_line",
            title: "Chart for SampleData",
        }
    },
    formats: [
        {
            "thousandsSeparator": ",",
            "decimalSeparator": ".",
            "decimalPlaces": 0,
            "textAlign": "right",
            "isPercent": false
        }
    ]
    /*
*/
};

const report_test ={
    "dataSource": {
        "type": "json",
        "filename": "https://cdn.flexmonster.com/data/retail-data.json",
        "mapping": {
            "Quantity": {
                "type": "number"
            },
            "Price": {
                "type": "number"
            },
            "Retail Category": {
                "type": "string"
            },
            "Sales": {
                "type": "number"
            },
            "Order Date": {
                "type": "year/quarter/month/day"
            },
            "Date": {
                "type": "date"
            },
            "Status": {
                "type": "string"
            },
            "Product Code": {
                "type": "string"
            },
            "Phone": {
                "type": "string"
            },
            "Country": {
                "type": "string",
                "folder": "Location"
            },
            "City": {
                "type": "string",
                "folder": "Location"
            },
            "CurrencyID": {
                "type": "property",
                "hierarchy": "Country"
            },
            "Contact Last Name": {
                "type": "string"
            },
            "Contact First Name": {
                "type": "string"
            },
            "Deal Size": {
                "type": "string"
            }
        }
    },
    "slice": {
        "rows": [
            {
                "uniqueName": "Country",
                "filter": {
                    "members": [
                        "country.[australia]",
                        "country.[usa]",
                        "country.[japan]"
                    ]
                }
            }
        ],
        "columns": [
            {
                "uniqueName": "Order Date",
                "filter": {
                    "members": [
                        "order date.[2019].[quarter 3]",
                        "order date.[2019].[quarter 4]",
                        "order date.[2018].[quarter 4]",
                        "order date.[2018].[quarter 3]"
                    ]
                }
            },
            {
                "uniqueName": "[Measures]"
            }
        ],
        "measures": [
            {
                "uniqueName": "Price",
                "aggregation": "sum",
                "format": "-6fso6qmiksl00"
            },
            {
                "uniqueName": "Sales",
                "aggregation": "sum",
                "format": "-6fso6qmiksl00"
            }
        ],
        "sorting": {
            "column": {
                "type": "desc",
                "tuple": [],
                "measure": {
                    "uniqueName": "Price",
                    "aggregation": "sum"
                }
            }
        },
        "expands": {
            "rows": [
                {
                    "tuple": [
                        "country.[japan]"
                    ]
                },
                {
                    "tuple": [
                        "country.[australia]"
                    ]
                },
                {
                    "tuple": [
                        "country.[usa]"
                    ]
                }
            ]
        },
        "drills": {
            "columns": [
                {
                    "tuple": [
                        "order date.[2019]"
                    ]
                },
                {
                    "tuple": [
                        "order date.[2018]"
                    ]
                }
            ]
        }
    },
    "options": {
        "chart": {
            "type": "column_line"
        }
    },
    "conditions": [
        {
            "formula": "#value > 500000",
            "format": {
                "backgroundColor": "#00A45A",
                "color": "#FFFFFF",
                "fontFamily": "Arial",
                "fontSize": "12px"
            }
        },
        {
            "formula": "#value < 1000",
            "format": {
                "backgroundColor": "#DF3800",
                "color": "#FFFFFF",
                "fontFamily": "Arial",
                "fontSize": "12px"
            }
        }
    ],
    "formats": [
        {
            "name": "-6fso6qmiksl00",
            "thousandsSeparator": " ",
            "decimalSeparator": ".",
            "decimalPlaces": 0,
            "currencySymbol": "$",
            "positiveCurrencyFormat": "$1",
            "nullValue": "-",
            "textAlign": "right",
            "isPercent": false
        }
    ]
};

function getData() {
    return(data_source_test)
};

export default function PivotTableDemo() {
    return (
        <>

            <div className="App">
                <ForwardRefPivot
                    toolbar={true}
                    beforetoolbarcreated={toolbar => {
                        toolbar.showShareReportTab = true;
                    }}
/*                     shareReportConnection={{
                        url: "https://olap.flexmonster.com:9500"
                    }} */
                    width="100%"
                    height={600}
                    report={reportTest}
                    //licenseKey="XXXX-XXXX-XXXX-XXXX-XXXX"
                />
            </div>
        </>
    );
}
