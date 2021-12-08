using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SistemaHotel
{
    public partial class FrmLogin : Form
    {

        // CTOR - CONSTRUTOR
        public FrmLogin()
        {
            InitializeComponent();
            pnlLogin.Visible = false;
        }

        private void FrmLogin_Load(object sender, EventArgs e)
        {
            pnlLogin.Location = new Point(this.Width / 2 - 166, this.Height / 2 - 170);
            pnlLogin.Visible = true;
            BtnLogin.FlatAppearance.MouseOverBackColor = Color.FromArgb(21, 114, 160);
            BtnLogin.FlatAppearance.MouseDownBackColor = Color.FromArgb(8, 72, 103);
        }


        // EVENTO
        private void BtnLogin_Click(object sender, EventArgs e)
        {
            ChamarLogin();
        }

        private void FrmLogin_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                ChamarLogin();
            }
        }

        private void ChamarLogin()
        {
            // txtUsuario.Text.ToString().Trim() -> Ignora espaço como caractere
            if (txtUsuario.Text.ToString().Trim() == "")
            {
                MessageBox.Show("Preencha o Usuário! ", "Campo Vazio", MessageBoxButtons.OK, MessageBoxIcon.Information);
                txtUsuario.Text = "";
                txtUsuario.Focus();
                return;
            }

            if (txtSenha.Text.ToString().Trim() == "")
            {
                MessageBox.Show("Preencha a Senha! ", "Campo Vazio", MessageBoxButtons.OK, MessageBoxIcon.Information);
                txtSenha.Text = "";
                txtSenha.Focus();
                return;
            }

            //AQUI VAI O CÓDIGO PARA O LOGIN

            FrmMenu form = new FrmMenu();
            // Fecha a tela de Login
            //this.Hide();
            LimparLogin();
            // Mostra a tela de Menu
            form.Show();
        }

        private void LimparLogin()
        {
            txtUsuario.Text = "";
            txtSenha.Text = "";
            txtUsuario.Focus();

        }

        private void FrmLogin_Resize(object sender, EventArgs e)
        {
            pnlLogin.Location = new Point(this.Width / 2 - 166, this.Height / 2 - 170);
        }
    }
}
