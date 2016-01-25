package com.home.ebay.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="cozy_display")
public class CozyDisplay {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name="primary_serial")
	private String primaryFab;
	@Column(name="secondary_serial")
	private String secondaryFab;
	@Column(name="description")
	private String description;
	@Column(name="quantity")
	private Integer quantity;
	@Column(name="cozy_serial")
	private String serialNum;

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
	public Integer getId() {
		return id;
	}
	/**
	 * @return the primaryFab
	 */
	public String getPrimaryFab() {
		return primaryFab;
	}
	/**
	 * @param primaryFab the primaryFab to set
	 */
	public void setPrimaryFab(String primaryFab) {
		this.primaryFab = primaryFab;
	}
	/**
	 * @return the secondaryFab
	 */
	public String getSecondaryFab() {
		return secondaryFab;
	}
	/**
	 * @param secondaryFab the secondaryFab to set
	 */
	public void setSecondaryFab(String secondaryFab) {
		this.secondaryFab = secondaryFab;
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
