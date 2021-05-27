import { Component,OnInit  } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Compania } from '../interfaces/Compania';
import { CompaniaService } from '../api/compania.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  companias: Compania[] = [];

  constructor(private companiaService: CompaniaService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {}


   
    async ngOnInit() {
      const loading = await this.loadingCtrl.create({
        message: 'Cargando..',
      });
      await loading.present();
      this.companiaService.getAllCompania()
      .subscribe(async (companias) => {
        console.log('companias: ' + companias);
        this.companias = companias;
        console.log("JSON var Array" + JSON.stringify(this.companias));
        await loading.dismiss();
      });
    }


    async openAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Nueva Compañia de Bomberos!',
        inputs: [
          {
            name: 'id',
            type: 'text',
            placeholder: 'Id compañia'
          },
          {
            name: 'compania',
            type: 'text',
            placeholder: 'Nombre compañia bomberos'
          },
          {
            name: 'direccion',
            type: 'text',
            placeholder: 'Direccion'
          },
          {
            name: 'telefono',
            type: 'text',
            placeholder: 'Telefono'
          },
          {
            name: 'img',
            type: 'text',
            placeholder: 'Imagen de la compañia'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Crear',
            handler: (data : Compania) => {
              
               this.createCompania(data);
            }
          }
        ]
      });
      await alert.present();
    }



    createCompania(compania : Compania) {

      this.companiaService.createCompania(compania)
      .subscribe((newCompania) => {
        this.ngOnInit();
      });
    }
  



}
