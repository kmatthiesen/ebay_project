package com.home.ebay.webservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
//		return fabricDao.getAllFabric();
		List<Fabric> fabList = new ArrayList<Fabric>();
		Fabric fab1 = new Fabric();
		fab1.setSerial_num("TES-001");
		fab1.setFabric_name("Fabric 1");
		Fabric fab2 = new Fabric();
		fab2.setSerial_num("TES-002");
		fab2.setFabric_name("Fabric 2");
		fabList.add(fab2);
		fabList.add(fab1);
		return fabList;
	}
}
