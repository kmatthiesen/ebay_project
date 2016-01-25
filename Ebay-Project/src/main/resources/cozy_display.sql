-- View: cozy_display

-- DROP VIEW cozy_display;

CREATE OR REPLACE VIEW cozy_display AS 
 SELECT c.id,
    c.serialnum AS cozy_serial,
    f.serialnum AS secondary_serial,
    f2.serialnum AS primary_serial,
    concat(f2.description, ' & ', f.description) AS description,
    c.quantity
   FROM cozy c
     JOIN fabric f ON c.secondaryfab = f.id
     JOIN fabric f2 ON c.primaryfab = f2.id;

ALTER TABLE cozy_display
  OWNER TO postgres;
