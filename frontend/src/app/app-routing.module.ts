import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroInstituicaoComponent } from './cadastro-instituicao/cadastro-instituicao.component';
import { CadastroPacoteComponent } from './cadastro-pacote/cadastro-pacote.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'dashboard/cadastro-evento', component:CadastroEventoComponent},
  {path: 'dashboard/cadastro-pessoa', component:CadastroPessoaComponent},
  {path: 'dashboard/cadastro-instituicao', component:CadastroInstituicaoComponent},
  {path: 'dashboard/cadastro-pacote', component:CadastroPacoteComponent},
  
  {path: 'login', component:LoginComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
