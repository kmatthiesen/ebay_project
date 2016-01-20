package com.home.ebay.webservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.home.ebay.dao.FabricDao;
import com.home.ebay.entity.Fabric;


@RestController
public class WebServices {

	@Autowired
	private FabricDao fabricDao;

	public void setFabricDao(FabricDao fabricDao) {
		this.fabricDao = fabricDao;
	}
	
	@RequestMapping(value = "/fabrics", method = RequestMethod.GET)
	public List<Fabric> getAllFabric(){
		return fabricDao.getAllFabric();
	}
	
	@RequestMapping(value = "/fabrics/new", method = RequestMethod.POST)
	public void newFabric(@RequestBody Fabric fabric){
		fabricDao.addFabric(fabric);
	}
}
