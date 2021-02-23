package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "inventory_men")

public class Men {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column (nullable = false)
    private String menCategory;

    @Column
    private String menBrand;

    @Column
    private String menLocation;

    @Column
    private String description;

    @Column
    private Integer numberOfItems;

    @Column
    private Boolean menInStock;

    public Men(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMenCategory() {
        return menCategory;
    }

    public void setMenCategory(String menCategory) {
        this.menCategory = menCategory;
    }

    public String getMenBrand() {
        return menBrand;
    }

    public void setMenBrand(String menBrand) {
        this.menBrand = menBrand;
    }

    public String getMenLocation() {
        return menLocation;
    }

    public void setMenLocation(String menLocation) {
        this.menLocation = menLocation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getNumberOfItems() { return numberOfItems; }

    public void setNumberOfItems(Integer numberOfItems) { this.numberOfItems = numberOfItems; }

    public Boolean getMenInStock() { return menInStock; }

    public void setMenInStock(Boolean menInStock) { this.menInStock = menInStock; }
}
