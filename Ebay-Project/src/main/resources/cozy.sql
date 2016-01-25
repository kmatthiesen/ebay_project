-- Table: cozy

-- DROP TABLE cozy;

CREATE TABLE cozy
(
  id serial NOT NULL,
  secondaryfab integer,
  primaryfab integer,
  description character varying(1000),
  quantity integer,
  serialnum character varying(255),
  CONSTRAINT primaryfab_fk FOREIGN KEY (primaryfab)
      REFERENCES fabric (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT secondaryfab_fk FOREIGN KEY (secondaryfab)
      REFERENCES fabric (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE cozy
  OWNER TO postgres;

-- Index: fki_primaryfab_fk

-- DROP INDEX fki_primaryfab_fk;

CREATE INDEX fki_primaryfab_fk
  ON cozy
  USING btree
  (primaryfab);

-- Index: fki_secondaryfab_fk

-- DROP INDEX fki_secondaryfab_fk;

CREATE INDEX fki_secondaryfab_fk
  ON cozy
  USING btree
  (secondaryfab);

