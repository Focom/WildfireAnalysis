import { Mongoose } from "mongoose";

let fireSchema = Mongoose.Schema({
    FOD_ID:Number,
    FPA_ID:String,
    SOURCE_SYSTEM_TYPE:String
    SOURCE_SYSTEM:String,
    NWCG_REPORTING_AGENCY:String,
    NWCG_REPORTING_UNIT_ID:String,
    NWCG_REPORTING_UNIT_NAME:String,
    SOURCE_REPORTING_UNIT:Number,
    SOURCE_REPORTING_UNIT_NAME:String,
    LOCAL_FIRE_REPORT_ID:Number,
    LOCAL_INCIDENT_ID:String,
    FIRE_CODE:String,
    FIRE_NAME:String,
    ICS_209_INCIDENT_NUMBER:String,
    ICS_209_NAME:String,
    MTBS_ID:String,
    MTBS_FIRE_NAME:String,
    COMPLEX_NAME:String,
    FIRE_YEAR:Number,
    DISCOVERY_DATE:Number,
    DISCOVERY_DOY:Number,
    DISCOVERY_TIME:Number,
    STAT_CAUSE_CODE:Number,
    STAT_CAUSE_DESCR:Number,
    CONT_DATE:Number,
    CONT_DOY:Number,
    CONT_TIME:Number,
    FIRE_SIZE:Number,
    FIRE_SIZE_CLASS:String,
    LATITUDE:Number,
    LONGITUDE:Number,
    OWNER_CODE:Number,
    OWNER_DESCR:String,
    STATE:String,
    COUNTY:Number,
    FIPS_CODE:Number,
    FIPS_NAME:String,
    
})