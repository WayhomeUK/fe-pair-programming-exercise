import { rest } from "msw";

const apiRoot = "https://someendpoint.com";

export const handlers = [
    rest.get(`${apiRoot}/v1/properties`, (req, res, context) => {
        return res(
            context.status(200),
            context.json({
                result: [
                    {
                        ID: "test-1",
                        selected_by: "operator-1",
                        address: "21 Some street, Somecity",
                        postcode: "AB1 9CD",
                        price: 255000,
                        price_date: "2019-09-03",
                        total_bedrooms: 2,
                        floor_area: 81,
                    },
                    {
                        ID: "test-2",
                        selected_by: "operator-1",
                        address: "42 Some street, Somecity",
                        postcode: "AB1 9CD",
                        price: 255000,
                        price_date: "2019-09-03",
                        total_bedrooms: 2,
                        floor_area: 60.2,
                    },
                    {
                        ID: "test-3",
                        selected_by: "operator-1",
                        address: "23 Some street, Somecity",
                        postcode: "AB1 9CD",
                        price: 209000,
                        price_date: "2019-09-03",
                        total_bedrooms: 2,
                        floor_area: 65.5,
                    },
                    {
                        ID: "test-4",
                        selected_by: "operator-2",
                        address: "23 Some street, Somecity",
                        postcode: "AB1 9CD",
                        price: 209000,
                        price_date: "2019-09-03",
                        total_bedrooms: 2,
                        floor_area: 65.5,
                    },
                    {
                        ID: "test-5",
                        selected_by: "operator-2",
                        address: "35 Some street, Somecity",
                        postcode: "AB1 9CD",
                        price: 250000,
                        price_date: "2019-09-03",
                        total_bedrooms: 2,
                        floor_area: 69.8,
                    },
                    {
                        ID: "test-6",
                        selected_by: "operator-2",
                        address: "21 Some street, Somecity",
                        postcode: "AB1 9CD",
                        price: 255000,
                        price_date: "2019-09-03",
                        total_bedrooms: 2,
                        floor_area: 81,
                    },
                ],
                total_results: 6,
            })
        );
    }),
];
