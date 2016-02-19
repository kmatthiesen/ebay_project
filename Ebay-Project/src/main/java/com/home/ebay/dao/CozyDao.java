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
		return em.createQuery("SELECT c FROM cozy c", Cozy.class).getResultList();
	}
	
	public void add(Cozy cozy){
		em.persist(cozy);
		em.flush();
	}
	
}
