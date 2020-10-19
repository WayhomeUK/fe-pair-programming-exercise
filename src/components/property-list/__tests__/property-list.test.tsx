import React from "react";
import { render, waitFor } from "@testing-library/react";
import { PropertyList } from "../property-list";

describe("<PropertyList/>", () => {
    it("should render a list of properties", async () => {
        const { getAllByText } = render(<PropertyList />);

        await waitFor(() => {
            expect(getAllByText(/21 some street/i)).toHaveLength(2);
            expect(getAllByText(/42 some street/i)).toHaveLength(1);
            expect(getAllByText(/23 some street/i)).toHaveLength(2);
            expect(getAllByText(/35 some street/i)).toHaveLength(1);
        });
    });
});
