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
		em.flush();
	}
	
	public List<Fabric> getAllFabric(){
		return em.createQuery("SELECT f FROM fabric f ORDER BY id", Fabric.class).getResultList();
	}

	public Fabric getFabric(Integer id) {
		return em.createQuery("SELECT f FROM fabric f WHERE f.id = :id", Fabric.class).setParameter("id", id).getSingleResult();
	}

	public void updateFabric(Fabric fabric) {
		// TODO Auto-generated method stub
		System.out.println(em.merge(fabric).toString());
		em.flush();
	}

	public void deleteFabric(Integer id) {
		// TODO Auto-generated method stub
		em.createQuery("DELETE fabric WHERE id = :id").setParameter("id", id).executeUpdate();
	}
}
