/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import model.VehicleOfInterest;

/**
 *
 * @author Shristi Amatya
 */
@Stateless
public class VehicleOfInterestFacade extends AbstractFacade<VehicleOfInterest> {

    @PersistenceContext(unitName = "VOIWebAppPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public VehicleOfInterestFacade() {
        super(VehicleOfInterest.class);
    }
    
}
