package com.home.ebay.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.home.ebay.entity.Cozy;

@Component
@Transactional
public class CozyDao {

	@PersistenceContext
	private EntityManager em;
	
	public void setEm(EntityManager em){
		this.em=em;
	}
	
	public List<Cozy> getAll(){
		return em.createQuery("SELECT c.id, c.serialNum , f.serialNum ," 
				+ " f2.serialNum , CONCAT(f.description , ' ', f2.description)"
				+ " FROM cozy c, fabric f, fabric f2 WHERE c.primaryFab = f.id AND c.secondaryFab = f2.id "
				, Cozy.class).getResultList();
	}
	
	public List<Cozy> getAllTest() {
		return em.createQuery("SELECT c.serialNum FROM cozy c", Cozy.class).getResultList();
	}
}
