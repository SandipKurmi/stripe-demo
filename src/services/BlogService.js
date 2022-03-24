import { ExportCustomJobPage } from 'twilio/lib/rest/bulkexports/v1/export/exportCustomJob';
import Service from './Service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



class BlogService extends Service {
    constructor(model) {
        super(model);
        // this.signup = this.signup.bind(this);
     
       

    }
  
  
   


    // unfollow

    // async unfollow(data) {
    //     if (data.body.userId !== data.id) {
    //         try {
    //             const user = await this.model.findById(data.id);
    //             const currentUser = await this.model.findById(data.body.userId);
    //             if (!user.followers.includes(data.body.userId)) {
    //                 await user.updateOne({ $pull: { followers: data.body.userId } });
    //                 await currentUser.updateOne({ $pull: { followings: data.id } });
    //                 return {
    //                     error: false,
    //                     statusCode: 200,
    //                     error: ' user has been unfollowed '
    //                 };
    //             } else {
    //                 return {
    //                     error: true,
    //                     statusCode: 403,
    //                     error: ' you allready unfollow this user '
    //                 };
    //             }
    //         } catch (err) {
    //             return {
    //                 error: true,
    //                 statusCode: 500,
    //                 error: ' Server Error '
    //             };
    //         }
    //     } else {
    //         return {
    //             error: true,
    //             statusCode: 403,
    //             error: ' you cant unfollow yourself '
    //         };
    //     }
    // }
    


}

export default BlogService;
