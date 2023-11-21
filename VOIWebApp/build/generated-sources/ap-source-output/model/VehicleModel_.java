package model;

import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import model.VehicleMake;
import model.VehicleOfInterest;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2023-09-30T23:10:22")
@StaticMetamodel(VehicleModel.class)
public class VehicleModel_ { 

    public static volatile CollectionAttribute<VehicleModel, VehicleOfInterest> vehicleOfInterestCollection;
    public static volatile SingularAttribute<VehicleModel, String> model;
    public static volatile SingularAttribute<VehicleModel, VehicleMake> make;

}