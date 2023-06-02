\c db_quotes

-- GET RANDOM QUOTE 

CREATE OR REPLACE FUNCTION Quotes_Row_SelectRandom()
RETURNS JSON
AS 
$$ 
BEGIN
  RETURN (SELECT json_agg(q) 
          FROM (SELECT q.id, q.quote, q.created_at, q.autor_id
                FROM quotes q
                OFFSET FLOOR(RANDOM() * (SELECT COUNT(*) FROM quotes))
                LIMIT 1) q);
END;
$$ 
LANGUAGE PLPGSQL;
