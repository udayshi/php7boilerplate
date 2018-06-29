let data=[
    {name:'uday' ,age:40,location:'Siphal',dob:'1998-07-20',child:{active:'Y'}},
    {name:'uday' ,age:20,location:'Anamnagar',dob:'1998-07-23'},
    {name:'uday' ,age:35,location:'Bnamnagar',dob:'1998-06-23'},
    {name:'aradhya' ,age:15,location:'cnamnagar',dob:'1998-08-23'},
    {name:'uday' ,age:15,location:'cnamnagar',dob:'1998-08-23'},
    {name:'sabita' ,age:30,location:'Heauta',dob:'2000-03-23'},
    ]
class USUtil{
    constructor(){
        this.reset();
    }
    reset(){
        this.data=[];
        this.columns=[];
        this.contition=[];
        this.order=[];
    }
    from(data){
        this.data=data;
        return this;
    }
    select(fields){
        this.reset();
        if(fields=='*')
            this.columns='*';
        else
            this.columns=fields.split(',');
        return this;
    }
    where(k,oper,v){
        this.contition.push({k:k,oper:oper,v:v});
        return this;
    }
    orderby(k,type='asc'){
        this.order.push({k:k,direction:type});
        return this;
    }
    getSelectedColumn(data){
        return data.map(r=>{
                         let selected_fields={};
                        if(this.columns=='*')
                            selected_fields=r;
                        else{
                            selected_fields={};
                            this.columns.forEach(col=>{
                                col=col.trim();
                            if(r.hasOwnProperty(col))
                                selected_fields[col]=r[col];
                        });

                        }
                return selected_fields;
            });
    }
    getFilterData(data){

    }
    getOrderBy(data){
        if(this.order.length>0){
            data=data.sort((r_a,r_b)=>{

             for(let i=0;i<this.order.length;i++)
            {
                let order=this.order[i];
                let or_a = r_a[order.k];
                let or_b = r_b[order.k];
                if (or_a == '')
                    or_a = '';
                if (or_b == '')
                    or_b = '';
                if (or_a > 0) {
                    //int
                } else {
                    or_a = or_a.toString().toLowerCase();
                    or_b = or_b.toString().toLowerCase();
                }
                if (order.direction == 'desc') {
                    return or_a < or_b;
                } else {
                    return or_a > or_b;
                }
            }


        })
        }
        return data;

    }
    getFilterData(){
        let output=this.data;
        output=output.filter(row=>{
                let found=false;
                let total_found=0;
        this.contition.forEach(cond=> {
                                     let dimensions = cond.k.split('.');
                                    if(!row.hasOwnProperty(dimensions[0]))
                                        return false;

                                    let cv=cond.v;
                                    let rv=null;
                                    if(dimensions.length==1){
                                        rv=row[dimensions[0]];
                                    }
                                    else if(dimensions.length==2){
                                        if(!row[dimensions[0]].hasOwnProperty(dimensions[1]))
                                            return false;
                                        rv=row[dimensions[0]][dimensions[1]];
                                    }else if(dimensions.length==3){
                                        if(!row[dimensions[0]][dimensions[1]].hasOwnProperty(dimensions[2]))
                                            return false;
                                        rv=row[dimensions[0]][dimensions[1]][dimensions[2]];
                                    }else if(dimensions.length==4){
                                        if(!row[dimensions[0]][dimensions[1]][dimensions[2]].hasOwnProperty(dimensions[3]))
                                            return false;
                                        rv=row[dimensions[0]][dimensions[1]][dimensions[2]][dimensions[3]];
                                    }
                                    if(rv=='')
                                        rv='';
                                    if(cv=='')
                                        cv='';

                                    if(cond.oper=='=' || cond.oper=='like'){
                                        cv=cv.trim().toUpperCase();
                                        rv=rv.trim().toUpperCase();
                                    }if(cond.oper=='<' ||cond.oper=='>' || cond.oper=='>=' ||cond.oper=='<='){
                                        cv=isNaN(parseFloat(cv))?0:parseFloat(cv);
                                        rv=isNaN(parseFloat(rv))?0:parseFloat(rv);
                                    }
                                    if(cond.oper=='=' && cv==rv)
                                        total_found++;
                                    else if(cond.oper=='<' && rv<cv)
                                        total_found++;
                                    else if(cond.oper=='>' && rv>cv)
                                        total_found++;
                                    else if(cond.oper=='>=' && rv>=cv)
                                        total_found++;
                                    else if(cond.oper=='<=' && rv<=cv)
                                        total_found++;
                                    else if(cond.oper=='like' && rv.search(cv)>=0){
                                        total_found++;
                                    }

                                    });

                    return total_found==this.contition.length;
            });
        return output;
    }
    fetch(){


        let output=this.getFilterData();
        output=this.getSelectedColumn(output);
        output=this.getOrderBy(output);
        //Implement order by



        return output;
    }


}
let objUtil=new USUtil();

let search_data=objUtil.select('name')
                        .from(data)
                        /*.where('age','>','20')
                        .where('name','like','uday')
                        .where('child.active','=','y')*/
                        .orderby('name','desc')

                        .fetch();
console.log(search_data);


