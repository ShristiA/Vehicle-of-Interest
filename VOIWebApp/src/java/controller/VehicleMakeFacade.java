/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import model.VehicleMake;

/**
 *
 * @author Shristi Amatya
 */
@Stateless
public class VehicleMakeFacade extends AbstractFacade<VehicleMake> {

    @PersistenceContext(unitName = "VOIWebAppPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public VehicleMakeFacade() {
        super(VehicleMake.class);
    }
    
}
