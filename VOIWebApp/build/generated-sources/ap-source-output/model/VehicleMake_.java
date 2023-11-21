package model;

import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import model.VehicleModel;
import model.VehicleOfInterest;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2023-09-30T23:10:22")
@StaticMetamodel(VehicleMake.class)
public class VehicleMake_ { 

    public static volatile CollectionAttribute<VehicleMake, VehicleOfInterest> vehicleOfInterestCollection;
    public static volatile CollectionAttribute<VehicleMake, VehicleModel> vehicleModelCollection;
    public static volatile SingularAttribute<VehicleMake, String> make;

}