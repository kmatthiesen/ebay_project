package com.home.ebay.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.home.ebay.entity.Fabric;

@Component
@Transactional
public class FabricDao {

	@PersistenceContext
	private EntityManager em;
	
	public void setEm(EntityManager em){
		this.em=em;
	}
	
	public void addFabric(Fabric newFabric){
		em.persist(newFabric);
	}
	
	public List<Fabric> getAllFabric(){
		return em.createQuery("SELECT f FROM fabric f ORDER BY id", Fabric.class).getResultList();
	}
}
