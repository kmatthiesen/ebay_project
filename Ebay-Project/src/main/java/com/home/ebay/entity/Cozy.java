package com.home.ebay.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "cozy")
@Table(name = "cozy")
public class Cozy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Integer primaryFab;
	private Integer secondaryFab;
	private String description;
	private Integer quantity;
	@Column(name = "serialnum")
	private String serialNum;
	
	/**
	 * @return the primaryFab
	 */
	public Integer getPrimaryFab() {
		return primaryFab;
	}
	/**
	 * @param primaryFab the primaryFab to set
	 */
	public void setPrimaryFab(Integer primaryFab) {
		this.primaryFab = primaryFab;
	}
	/**
	 * @return the secondaryFab
	 */
	public Integer getSecondaryFab() {
		return secondaryFab;
	}
	/**
	 * @param secondaryFab the secondaryFab to set
	 */
	public void setSecondaryFab(Integer secondaryFab) {
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
	public Integer getId() {
		return id;
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
