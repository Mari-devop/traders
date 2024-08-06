import React from 'react';
import { Link } from 'react-router-dom';
import { Product, Customer } from '../../types';
import { ResultItem, ResultName, ResultDetails, ResultContent, Details } from './SearchResult.styled';

interface SearchResultsProps {
  results: (Product | Customer)[];
  table: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, table }) => {
  return (
    <div>
      {results.map((result, index) => (
        <ResultItem key={'id' in result ? result.id : undefined}>
          <ResultName>
            <Link to={`/${table}/${'id' in result ? result.id : ''}`}>
              {table === 'products' ? (result as Product).name : (result as Customer).company}
            </Link>
          </ResultName>
          <ResultContent>
            {table === 'products' ? (
              <Details>
                <ResultDetails>#{index + 1},</ResultDetails>
                <ResultDetails>Quantity per unit: {(result as Product).quantityPerUnit},</ResultDetails>
                <ResultDetails>Price: {(result as Product).unitPrice}, </ResultDetails>
                <ResultDetails>Stock: {(result as Product).unitsInStock}, </ResultDetails>
                <ResultDetails>Orders: {(result as Product).unitsOnOrder}</ResultDetails>
              </Details>
            ) : (
              <Details>
                <ResultDetails>#{index + 1},</ResultDetails>
                <ResultDetails>Contact: {(result as Customer).contact}, </ResultDetails>
                <ResultDetails>Title: {(result as Customer).title}, </ResultDetails>
                <ResultDetails>City: {(result as Customer).city}, </ResultDetails>
                <ResultDetails>Country: {(result as Customer).country}</ResultDetails>
              </Details>
            )}
          </ResultContent>
        </ResultItem>
      ))}
    </div>
  );
};

export default SearchResults;
