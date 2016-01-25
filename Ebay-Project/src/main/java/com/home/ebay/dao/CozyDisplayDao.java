package com.home.ebay.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.home.ebay.entity.CozyDisplay;

@Component
@Transactional
public class CozyDisplayDao {

	
	@PersistenceContext
	private EntityManager em;
	
	public void setEm(EntityManager em){
		this.em=em;
	}
	
	public List<CozyDisplay> getAll(){
		return em.createQuery("SELECT c FROM cozy_display c", CozyDisplay.class).getResultList();
	}
}
