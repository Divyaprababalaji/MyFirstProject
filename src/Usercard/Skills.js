function Skills({Skillssec}){
    return(
        <div>
          <h6>Skills</h6>

             <div id="skilllist" style={{display:"flex",justifyContent:"center",width:200}}>
          {Skillssec?.Skills?.map((e)=>{
            return <div style={{border:"1px solid dodgerblue",padding:"4px",borderRadius:"6px",marginRight:10}}>{e}</div>
          })}
            
          </div>
        </div>
    )
}
export default Skills;