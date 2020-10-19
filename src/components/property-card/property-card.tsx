import React from "react";
import styled from "styled-components";

interface IProps {
    className?: string;
    address: string;
    price: number;
    bedrooms: number;
    floorArea: number;
}

export const PropertyCard: React.FC<IProps> = ({ className, address, price, bedrooms, floorArea }) => {
    return (
        <Wrapper className={className}>
            <h3>{address}</h3>
            <ul>
                <li>Price: £{price.toLocaleString()}</li>
                <li>Bedrooms: {bedrooms}</li>
                <li>Floor Area: {floorArea}</li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 16px;
`;
