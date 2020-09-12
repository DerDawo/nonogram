
        function generatenonogram(){
            var cols_ammount = Number(document.getElementById("cols-ammount").value)+1;
            var rows_ammount = Number(document.getElementById("rows-ammount").value)+1;
            document.getElementById("field-create").remove()
            document.getElementById("emptyspace").remove()
            document.getElementById("field-test").remove()
            //erstelle das Feld, indem Nonograms erzeugt werden
            var create_field = document.createElement("DIV");
            create_field.className = "field-container";
            create_field.id = "field-create";
            document.body.appendChild(create_field);
            //erzeuge Nonogram-Tabelle
            var nono_table = document.createElement("TABLE");
            nono_table.id = "table-nono";
            document.getElementById("field-create").appendChild(nono_table);  
            //erzeuge Nonogram
            for(i=0;i<rows_ammount;i++){
                var row = document.createElement("TR");
                row.id = "row-nono-"+i;
                document.getElementById("table-nono").appendChild(row); 
                for(j=0;j<cols_ammount;j++){
                    var_id = "cf-"+(i)+"-"+(j)
                    if(i==0||j==0){
                        var inf_block = document.createElement("TH");
                        inf_block.id = var_id;
                        if(i==0 && j==0){
                            inf_block.id = "ctopleft"
                        }else if(j==0){
                            inf_block.id = "cleft"
                        }else if(i==0){
                            inf_block.id = "ctop"
                        }
                        document.getElementById("row-nono-"+i).appendChild(inf_block);
                    }else{
                        var block = document.createElement("TD");
                        block.id = var_id;
                        block.setAttribute("data-soll", "0");
                        block.style.cursor = "pointer";                      
                        document.getElementById("row-nono-"+i).appendChild(block);
                    }
                }  
            }

            var ctop_height = (rows_ammount/2)*40
            var cleft_width = (cols_ammount/2)*40

            document.getElementById("ctop").style.height = ctop_height+"px"
            document.getElementById("cleft").style.width = cleft_width+"px"

            addafunc()
        
            var emptyspace = document.createElement("DIV");
            emptyspace.id = "emptyspace"
            emptyspace.style.height = "40px"
            document.body.appendChild(emptyspace)

            var test_field = document.createElement("DIV");
            test_field.className = "field-container";
            test_field.id = "field-test";
            document.body.appendChild(test_field);
        }

        function addafunc(){
            var cols_ammount = Number(document.getElementById("cols-ammount").value)+1;
            var rows_ammount = Number(document.getElementById("rows-ammount").value)+1;

            for(i=0;i<rows_ammount;i++){
                for(j=0;j<cols_ammount;j++){
                    if(i==0||j==0){
                    }else{
                        var_id = "cf-"+(i)+"-"+(j)
                        document.getElementById(var_id).addEventListener("click",changesoll)
                    }
                }
            }
        }

        function changesoll(){
            //Ändere den Zustand der Blöcke
            var stat = this.getAttribute("data-soll");
            if(stat == 0){
                this.setAttribute("data-soll",1)
                this.style.backgroundColor = "black"
            } else if(stat == 1){
                this.setAttribute("data-soll",0)
                this.style.backgroundColor = "#00000000"
            }
        } 

        function printnonogram(){
            var cols_ammount = Number(document.getElementById("cols-ammount").value)+1;
            var rows_ammount = Number(document.getElementById("rows-ammount").value)+1;
            //erzeuge Nonogram-Tabelle
            var nono_table = document.createElement("TABLE");
            nono_table.id = "table-nono-test";
            document.getElementById("field-test").appendChild(nono_table);  
            //erzeuge Nonogram
            for(i=0;i<rows_ammount;i++){
                var row = document.createElement("TR");
                row.id = "test-row-nono-"+i;
                document.getElementById("table-nono-test").appendChild(row); 
                for(j=0;j<cols_ammount;j++){
                    var_id_c = "cf-"+(i)+"-"+(j);
                    var_id = "tf-"+(i)+"-"+(j);
                    if(i==0||j==0){
                        var inf_block = document.createElement("TH");
                        inf_block.id = var_id;
                        if(i==0 && j==0){
                            inf_block.id = "ttopleft"
                        }else if(j==0){
                            inf_block.id = "tleft"
                        }else if(i==0){
                            inf_block.id = "ttop"
                        }
                        document.getElementById("test-row-nono-"+i).appendChild(inf_block);
                    }else{
                        var block = document.createElement("TD");
                        var c_block = document.getElementById(var_id_c);
                        block.id = var_id;
                        block.setAttribute("data-soll",c_block.getAttribute("data-soll"));
                        block.setAttribute("data-ist", "0");
                        block.style.cursor = "pointer";                      
                        document.getElementById("test-row-nono-"+i).appendChild(block);
                    }
                }  
            }
            var ctop_height = (rows_ammount/2)*40
            var cleft_width = (cols_ammount/2)*40

            document.getElementById("ttop").style.height = ctop_height+"px"
            document.getElementById("tleft").style.width = cleft_width+"px"
        
            add_play_func()

            var emptyspace = document.createElement("DIV");
            emptyspace.id = "emptyspace"
            emptyspace.style.height = "20px"
            document.body.appendChild(emptyspace)

            var outerbar = document.createElement("DIV");
            outerbar.id = "pro-bar-outer";
            outerbar.style.height = "20px";
            outerbar.style.width = "300px";
            document.body.appendChild(outerbar)

            var innerbar = document.createElement("DIV");
            innerbar.id = "pro-bar-inner";
            innerbar.style.height = "20px";
            innerbar.style.width = "0px";
            document.getElementById("pro-bar-outer").appendChild(innerbar)

        }
    
        function add_play_func(){
            var cols_ammount = Number(document.getElementById("cols-ammount").value)+1;
            var rows_ammount = Number(document.getElementById("rows-ammount").value)+1;

            for(i=0;i<rows_ammount;i++){
                for(j=0;j<cols_ammount;j++){
                    if(i==0||j==0){
                    }else{
                        var_id = "tf-"+(i)+"-"+(j)
                        document.getElementById(var_id).addEventListener("click",checksoll)
                    }
                }
            }
        }

        function checksoll(){
            var ist = this.getAttribute("data-ist")
            var soll = this.getAttribute("data-soll")
            if(soll == 0){
                if(ist==0){
                    this.setAttribute("data-ist",1)
                    this.style.backgroundColor = "red"
                }else if(ist==1){
                    this.setAttribute("data-ist",0)
                    this.style.backgroundColor = "#00000000"
                }
            } else if(soll == 1){
                if(ist==1){
                    this.setAttribute("data-ist",0)
                    this.style.backgroundColor = "#00000000"
                }else if(ist==0){
                    this.setAttribute("data-ist",1)
                    this.style.backgroundColor = "black"
                }
            }
            checkwin()
        } 

        function checkwin(){
            var cols_ammount = Number(document.getElementById("cols-ammount").value)+1;
            var rows_ammount = Number(document.getElementById("rows-ammount").value)+1;
            //Felder, die richtig sein müssen
            var win_conditi = (cols_ammount-1)*(rows_ammount-1)
            //Felder, die richtig sind
            var act_account = 0
            for(i=1;i<rows_ammount;i++){
                for(j=1;j<cols_ammount;j++){
                    var_id = "tf-"+(i)+"-"+(j);
                    ist = document.getElementById(var_id).getAttribute("data-ist");
                    soll = document.getElementById(var_id).getAttribute("data-soll");
                    if(ist==soll){
                       //erhöhe alle richtigen Felder um 1 für jedes richtige Feld
                       act_account+=1
                       document.getElementById("pro-bar-inner").style.width = (act_account/win_conditi)*300+"px"
                    }
                }
            }
            if(win_conditi==act_account){
                alert("YOU WON!")
            }
        }
        
