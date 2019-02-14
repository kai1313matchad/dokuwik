# Guide

Cupcake ipsum dolor sit amet muffin apple pie chocolate bar. Bear claw dragée gingerbread cupcake lollipop soufflé gummi bears caramels. Pastry donut cupcake gingerbread oat cake apple pie lemon drops gingerbread pie. Sweet roll cheesecake jelly chocolate. Dragée candy canes cake toffee candy canes muffin bear claw tart biscuit. Halvah macaroon ice cream cotton candy dragée gummies pastry. Macaroon pastry chupa chups sweet apple pie soufflé wafer gingerbread jelly beans.

## Struktur

Secara umum struktur Wiklan mengunakan HMVC yang mengacu pada repositori [wiredesignz](https://bitbucket.org/wiredesignz/codeigniter-modular-extensions-hmvc) 


``` markup
application
   |--config
   |--controllers
   |--helpers
   |--hooks
   |--language
   |--libraries
   |--models
   |--modules
   |--third_party
   |--views
```   

diatas adalah arsitektur dari codeigniter untuk lebih jelasnya dapat dipelajari [disini](https://www.codeigniter.com/user_guide/), untuk modul-modul tersimpan di folder modules, berikut ini struktur modul di aplikasi wiklan

``` markup
modules
   |--activity
   |--agency
   |--approval
   |--backup
   |--bank
   |--blog
   |--calendar
   |--cart
   |--category
   |--checkout
   |--client
   |--confirmation
   |--custom_pagination
   |--dashboard
   |--default_module
   |--dvilsf
   |--enquiries
   |--enquiry
   |--filter_nav
   |--invoices
   |--log_activity
   |--log_discount
   |--loghistory
   |--manage_akun
   |--manage_banner
   |--manage_complain
   |--manage_daftar
   |--manage_discount
   |--manage_faq
   |--manage_galeri
   |--manage_klien
   |--manage_kontak
   |--manage_laporan
   |--manage_materi
   |--manage_orders
   |--manage_ourClient
   |--manage_poin
   |--manage_product
   |--manage_role
   |--manage_score
   |--manage_seo
   |--manage_subscribe
   |--manage_task
   |--manage_testimoni
   |--manage_voucher
   |--monitoring
   |--my_error
   |--notifications
   |--owner
   |--panduan
   |--pendaftaran
   |--price_based_duration
   |--product
   |--promo
   |--report_maintenance
   |--request
   |--review
   |--selling_points
   |--site_cookies
   |--site_security
   |--site_settings
   |--slideshow
   |--store_accounts
   |--store_basket
   |--store_categories
   |--store_cities
   |--store_dashboard
   |--store_districs
   |--store_duration
   |--store_inbox
   |--store_labels
   |--store_like
   |--store_login
   |--store_order_status
   |--store_orders
   |--store_penilaian
   |--store_product
   |--store_profile
   |--store_provinces
   |--store_roads
   |--store_settings
   |--store_shoppertrack
   |--store_sizes
   |--store_testimoni
   |--store_vendor
   |--store_voucher
   |--store_wishlist
   |--task_order
   |--templates
   |--testimoni
   |--timedate
   |--transaction
   |--user_page
   |--vendor
   |--webpages
   |--wishlist
   |--youraccount
   |--yourmessages
```   

## HMVC

HMVC adalah versi pengembangan dari Design Patern MVC (Model-View-Control). HMVC sendiri adalah singkatan dari Hierarchical Model View Control. Atau bisa kita bilang sebagai versi MVC yang diimplementasikan secara hirarkis. Hirarkis di sini maksudnya adalah hirarki folder (struktur folder) yang mana menjadi modul.

Kuncinya adalah, satu modul memiliki satu MVC, atau bisa dikatan lebih gampangnya adalah, satu modul memiliki masing2 file model, file view dan file controll. Meskipun masing-masing file tersebut tidak selamanya diperlukan, ada kalanya cuma perlu file view dan controll saja.

Contoh: Saya memiliki folder modules folder ini nantinya akan saya gunakan sebagai tempat menaruh modul-modul saya. Oke, sekarang anggaplah saya ingin membuat modul produk, maka saya buat folder produk di dalam folder modules maka struktur foldernya menjadi modules/produk, di dalam folder produk ini akan kita buat folder untuk masing-masing file MVC, dengan kata lain kita akan membuat folder bernama model, view control .

Jika digambarkan, maka struktur hirarki nya akan menjadi sebagai berikut:

``` markup
modules
   |--produk
   		|--model
   		|--view
   		|--controller	
```   

## Modul Acuan

kami memakai module acuan dimana method method basic sudah ada tinggal disesuaikan atau ditambahkan menurut kebutuhan pengembangan, modul acuan bisa diperoleh di dalam foler modules terdapat folder **Copy this** jika dilihat strukturnya sama persis dengan desain MVC dimana terdapat folder model, folder view dan folder controller tinggal diganti nama controller dengan nama modul nya. dan perlu diingat harus menggunakan huruf kapital pada hanya pada awal penamaan fle.

**file controllers**

``` php
<?php
class Perfectcontroller extends MX_Controller 
{

function __construct() {
parent::__construct();
}

public function index()
    {
        $this->load->view('hello');
    }

function get($order_by)
{
    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get($order_by);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) 
{
    if ((!is_numeric($limit)) || (!is_numeric($offset))) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get_with_limit($limit, $offset, $order_by);
    return $query;
}

function get_where($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get_where($id);
    return $query;
}

function get_where_custom($col, $value) 
{
    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->get_where_custom($col, $value);
    return $query;
}

function _insert($data)
{
    $this->load->model('mdl_perfectcontroller');
    $this->mdl_perfectcontroller->_insert($data);
}

function _update($id, $data)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $this->mdl_perfectcontroller->_update($id, $data);
}

function _delete($id)
{
    if (!is_numeric($id)) {
        die('Non-numeric variable!');
    }

    $this->load->model('mdl_perfectcontroller');
    $this->mdl_perfectcontroller->_delete($id);
}

function count_where($column, $value) 
{
    $this->load->model('mdl_perfectcontroller');
    $count = $this->mdl_perfectcontroller->count_where($column, $value);
    return $count;
}

function get_max() 
{
    $this->load->model('mdl_perfectcontroller');
    $max_id = $this->mdl_perfectcontroller->get_max();
    return $max_id;
}

function _custom_query($mysql_query) 
{
    $this->load->model('mdl_perfectcontroller');
    $query = $this->mdl_perfectcontroller->_custom_query($mysql_query);
    return $query;
}

}

```

**file models**
``` php
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Mdl_perfectmodel extends CI_Model
{

function __construct() {
parent::__construct();
}

function get_table() {
    $table = "tablename";
    return $table;
}

function get($order_by){
    $table = $this->get_table();
    $this->db->order_by($order_by);
    $query=$this->db->get($table);
    return $query;
}

function get_with_limit($limit, $offset, $order_by) {
    $table = $this->get_table();
    $this->db->limit($limit, $offset);
    $this->db->order_by($order_by);
    $query=$this->db->get($table);
    return $query;
}

function get_where($id){
    $table = $this->get_table();
    $this->db->where('id', $id);
    $query=$this->db->get($table);
    return $query;
}

function get_where_custom($col, $value) {
    $table = $this->get_table();
    $this->db->where($col, $value);
    $query=$this->db->get($table);
    return $query;
}

function _insert($data){
    $table = $this->get_table();
    $this->db->insert($table, $data);
}

function _update($id, $data){
    $table = $this->get_table();
    $this->db->where('id', $id);
    $this->db->update($table, $data);
}

function _delete($id){
    $table = $this->get_table();
    $this->db->where('id', $id);
    $this->db->delete($table);
}

function count_where($column, $value) {
    $table = $this->get_table();
    $this->db->where($column, $value);
    $query=$this->db->get($table);
    $num_rows = $query->num_rows();
    return $num_rows;
}

function count_all() {
    $table = $this->get_table();
    $query=$this->db->get($table);
    $num_rows = $query->num_rows();
    return $num_rows;
}

function get_max() {
    $table = $this->get_table();
    $this->db->select_max('id');
    $query = $this->db->get($table);
    $row=$query->row();
    $id=$row->id;
    return $id;
}

function _custom_query($mysql_query) {
    $query = $this->db->query($mysql_query);
    return $query;
}

}
```
