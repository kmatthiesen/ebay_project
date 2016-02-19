package com.home.ebay.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "fabric")
public class Fabric {
	
	private Integer fabricId;
	@Column(name = "serialnum")
	private String serialNum;
	private Integer quantity;
	private String description;
	private Integer size;
	private String comments;
	private String photo;
	@Column(name="primaryFab")
	private boolean primaryFab;
	
	public String getSerialNum() {
		return serialNum;
	}
	public void setSerialNum(String serialNum) {
		this.serialNum = serialNum;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getSize() {
		return size;
	}
	public void setSize(Integer size) {
		this.size = size;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getFabricId() {
		return fabricId;
	}
	/**
	 * @param fabricId the fabricId to set
	 */
	public void setFabricId(Integer fabricId) {
		this.fabricId = fabricId;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	/**
	 * @return the primaryFabFab
	 */
	public boolean isprimaryFab() {
		return primaryFab;
	}
	/**
	 * @param primaryFabFab the primaryFabFab to set
	 */
	public void setprimaryFab(boolean primaryFab) {
		this.primaryFab = primaryFab;
	}
	
	
}