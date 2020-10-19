import React, { useEffect, useState } from "react";
import { PropertyCard } from "components/property-card";
import { IPropertyApiData } from "types/api";
import { IPropertyListing } from "types/property";

export const PropertyList: React.FC = () => {
    const [properties, setProperties] = useState<IPropertyListing[]>([]);

    useEffect(() => {
        const convertData = (data: IPropertyApiData): IPropertyListing => ({
            ID: data.ID,
            address: data.address,
            postcode: data.postcode,
            bedrooms: data.total_bedrooms,
            floorArea: data.floor_area,
            date: data.price_date,
            price: data.price,
        });

        (async () => {
            const response = await fetch("https://someendpoint.com/v1/properties", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            const convertedData = data.result.map(convertData);

            setProperties(convertedData);
        })();
    }, []);

    return (
        <ul>
            {properties.map((property, index) => (
                <li key={index}>
                    <PropertyCard
                        address={property.address}
                        price={property.price}
                        bedrooms={property.bedrooms}
                        floorArea={property.floorArea}
                    />
                </li>
            ))}
        </ul>
    );
};
