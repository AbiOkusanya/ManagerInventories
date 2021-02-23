package com.example.server.model;

import javax.persistence.*;

@Entity
@Table (name="inventory_makeup")
public class Makeup {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String makeupCategory;

    @Column
    private String makeupBrand;

    @Column
    private String makeupLocation;

    @Column
    private String description;

    @Column
    private Integer numberOfItems;

    @Column
    private Boolean makeupInStock;

    public Makeup (){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMakeupCategory() {
        return makeupCategory;
    }

    public void setMakeupCategory(String makeupCategory) {
        this.makeupCategory = makeupCategory;
    }

    public String getMakeupBrand() {
        return makeupBrand;
    }

    public void setMakeupBrand(String makeupBrand) {
        this.makeupBrand = makeupBrand;
    }

    public String getMakeupLocation() {
        return makeupLocation;
    }

    public void setMakeupLocation(String makeupLocation) {
        this.makeupLocation = makeupLocation;
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

    public Boolean getMakeupInStock() {
        return makeupInStock;
    }

    public void setMakeupInStock(Boolean makeupInStock) {
        this.makeupInStock = makeupInStock;
    }
}
