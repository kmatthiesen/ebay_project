package com.home.ebay.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "fabric")
public class Fabric {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String fabric_name;
	private String fabric_size;
	private Integer made_9in;
	private Integer made_11in;
	private Integer cut_9in;
	private Integer cut_11in;
	private Integer num_listed;
	private String additional_main_avail;
	private String additional_match_avail;
	private String serial_num;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFabric_size() {
		return fabric_size;
	}
	public void setFabric_size(String fabric_size) {
		this.fabric_size = fabric_size;
	}
	public Integer getMade_9in() {
		return made_9in;
	}
	public void setMade_9in(Integer made_9in) {
		this.made_9in = made_9in;
	}
	public Integer getMade_11in() {
		return made_11in;
	}
	public void setMade_11in(Integer made_11in) {
		this.made_11in = made_11in;
	}
	public Integer getCut_9in() {
		return cut_9in;
	}
	public void setCut_9in(Integer cut_9in) {
		this.cut_9in = cut_9in;
	}
	public Integer getCut_11in() {
		return cut_11in;
	}
	public void setCut_11in(Integer cut_11in) {
		this.cut_11in = cut_11in;
	}
	public Integer getNum_listed() {
		return num_listed;
	}
	public void setNum_listed(Integer num_listed) {
		this.num_listed = num_listed;
	}
	public String getAdditional_main_avail() {
		return additional_main_avail;
	}
	public void setAdditional_main_avail(String additional_main_avail) {
		this.additional_main_avail = additional_main_avail;
	}
	public String getAdditional_match_avail() {
		return additional_match_avail;
	}
	public void setAdditional_match_avail(String additional_match_avail) {
		this.additional_match_avail = additional_match_avail;
	}
	public String getSerial_num() {
		return serial_num;
	}
	public void setSerial_num(String serial_num) {
		this.serial_num = serial_num;
	}
	public String getFabric_name() {
		return fabric_name;
	}
	public void setFabric_name(String fabric_name) {
		this.fabric_name = fabric_name;
	}
}
