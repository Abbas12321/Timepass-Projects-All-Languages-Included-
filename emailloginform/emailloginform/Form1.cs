using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace emailloginform
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            string email = textBox1.Text;
            string Password = textBox2.Text;

            if((this.textBox1.Text == "abbas@gmail.com") && (this.textBox2.Text == "Password"))
            {
                MessageBox.Show("Congratulation!!! You are successfully login");
            }
            else
            {
                MessageBox.Show("sorry please try again later"); 
            }
        }

        private void textBox1_TextChanged_1(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
