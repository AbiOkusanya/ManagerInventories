package com.example.server.model;

import javax.persistence.*;


@Entity
@Table(name = "inventory_home")
public class Home {



    @Id
    @Column
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false)
    private String homeCategory;

    @Column
    private String homeBrand;

    @Column
    private String homeLocation;

    @Column
    private String description;

    @Column
    private Integer homeNumberOfItems;

    @Column
    private Boolean homeInStock;

    public Home(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHomeCategory() {
        return homeCategory;
    }

    public void setHomeCategory(String homeCategory) {
        this.homeCategory = homeCategory;
    }

    public String getHomeBrand() {
        return homeBrand;
    }

    public void setHomeBrand(String homeBrand) {
        this.homeBrand = homeBrand;
    }

    public String getHomeLocation() {
        return homeLocation;
    }

    public void setHomeLocation(String homeLocation) {
        this.homeLocation = homeLocation;
    }

    public Integer getHomeNumberOfItems() {
        return homeNumberOfItems;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setHomeNumberOfItems(Integer homeNumberOfItems) {
        this.homeNumberOfItems = homeNumberOfItems;
    }

    public Boolean getHomeInStock() {
        return homeInStock;
    }

    public void setHomeInStock(Boolean homeInStock) {
        this.homeInStock = homeInStock;
    }
}
