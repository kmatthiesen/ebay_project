package com.home.ebay.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "cozy")
public class Cozy {

	
	private Integer cozyId;

	@Column(nullable=false)
	private Fabric primaryFab;
	@Column(nullable=false)
	private Fabric secondaryFab;
	private String description;
	private Integer quantity;
	@Column(name = "serialnum")
	private String serialNum;
	
	
	/**
	 * @return the primaryFab
	 */
	@ManyToOne
	@JoinColumn(name="primaryFab")
	public Fabric getPrimaryFab() {
		return primaryFab;
	}
	/**
	 * @param primaryFab the primaryFab to set
	 */
	public void setPrimaryFab(Fabric primaryFab) {
		this.primaryFab = primaryFab;
	}
	/**
	 * @return the secondaryFab
	 */
	@ManyToOne
	@JoinColumn(name="secondaryFab")
	public Fabric getSecondaryFab() {
		return secondaryFab;
	}
	/**
	 * @param secondaryFab the secondaryFab to set
	 */
	public void setSecondaryFab(Fabric secondaryFab) {
		this.secondaryFab = secondaryFab;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * @return the quantity
	 */
	public Integer getQuantity() {
		return quantity;
	}
	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	/**
	 * @return the id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getCozyId() {
		return cozyId;
	}
	/**
	 * @param cozyId the cozyId to set
	 */
	public void setCozyId(Integer cozyId) {
		this.cozyId = cozyId;
	}
	/**
	 * @return the serialNum
	 */
	public String getSerialNum() {
		return serialNum;
	}
	/**
	 * @param serialNum the serialNum to set
	 */
	public void setSerialNum(String serialNum) {
		this.serialNum = serialNum;
	}
}
