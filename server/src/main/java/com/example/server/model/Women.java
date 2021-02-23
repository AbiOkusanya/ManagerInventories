package com.example.server.model;

import javax.persistence.*;

@Entity
@Table (name = "inventory_women")

public class Women {



    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String womenCategory;

    @Column
    private String womenBrand;

    @Column
    private String womenLocation;

    @Column
    private String description;

    @Column
    private Integer numberOfItems;

    @Column
    private Boolean womenInStock;

    public Women(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWomenCategory() {
        return womenCategory;
    }

    public void setWomenCategory(String womenCategory) {
        this.womenCategory = womenCategory;
    }

    public String getWomenBrand() {
        return womenBrand;
    }

    public void setWomenBrand(String womenBrand) {
        this.womenBrand = womenBrand;
    }

    public String getWomenLocation() {
        return womenLocation;
    }

    public void setWomenLocation(String womenLocation) {
        this.womenLocation = womenLocation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getNumberOfItems() {
        return numberOfItems;
    }

    public void setNumberOfItems(Integer numberOfItems) {
        this.numberOfItems = numberOfItems;
    }

    public Boolean getWomenInStock() {
        return womenInStock;
    }

    public void setWomenInStock(Boolean womenInStock) {
        this.womenInStock = womenInStock;
    }
}
