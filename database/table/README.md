# List Table

Cupcake ipsum dolor sit amet fruitcake chocolate bar fruitcake bonbon. Halvah powder jelly dragée chocolate bar tootsie roll topping halvah. Fruitcake I love donut cake I love jelly I love pie jelly-o.

``` markup
Database name
   |--accounts
   |--activities
   |--activity_transaction
   |--approval
   |--articles
   |--attachment
   |--bank
   |--banner
   |--chats
   |--ci_sessions
   |--clients
   |--comments
   |--convertion_log
   |--counter
   |--discount
   |--discount_log
   |--email_templates
   |--enquiries
   |--enquiry
   |--events
   |--faqs
   |--file_req
   |--galeri
   |--gambar
   |--invoices
   |--items
   |--items_saved
   |--kabupaten
   |--kecamatan
   |--kliens
   |--komplains
   |--kontaks
   |--laporan
   |--likes
   |--loghistory
   |--log_activity
   |--maintain_report
   |--materi
   |--notifications
   |--order_timer
   |--our_clients
   |--payments
   |--payment_conf
   |--payment_methods
   |--photo_report
   |--points
   |--price_bd
   |--product
   |--promo
   |--provinsi
   |--redirects
   |--request
   |--reviews
   |--role
   |--scores
   |--selling_point
   |--settings
   |--site_cookies
   |--slideshow
   |--store_basket
   |--store_categories
   |--store_duration
   |--store_item
   |--store_labels
   |--store_orders
   |--store_roads
   |--store_sizes
   |--subscribe
   |--tasks
   |--task_order
   |--tax
   |--testimoni
   |--vendor
   |--voucher
   |--voucher_own
   |--webpages
   |--wishlist
```   

## Accounts

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      | Null | Default | 		Extra 	    | 
| ---| ---------------- |:-------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       | NO   |         | AUTO_INCREMENT   |
| 2  | firstname        | VARCHAR(255)  | NO   |         | 				    |
| 3  | lastname         | VARCHAR(255)  | NO   |         | 				    |
| 4  | username         | VARCHAR(255)  | NO   |         | 				    |
| 5  | level            | VARCHAR(50)   | YES  |         | 				    |
| 6  | email            | VARCHAR(255)  | NO   |         | 				    |
| 7  | pword            | VARCHAR(255)  | NO   |         | 				    |
| 8  | address          | VARCHAR(255)  | NO   |         | 				    |
| 9  | phone	        | VARCHAR(255)  | NO   |         | 				    |
| 10 | status	        | INT(2)	    | NO   |         | 				    |
| 11 | date_made        | DATETIME	    | NO   |         | 				    |
| 12 | created_at       | TIMESTAMP     | YES  |         | 				    |
| 13 | updated_at       | TIMESTAMP     | YES  |         | 				    |
| 14 | last_login       | INT(11)	    | YES  |         | 				    |


## Activities

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      | Null | Default           | 		Extra 	  | 
| ---| ---------------- |:-------------:| ----:| ----------------- | ---------------- |
| 1  | activity_id      | INT(11)       | NO   |                   | AUTO_INCREMENT   |
| 2  | user             | INT(11)       | NO   |                   | 				  |
| 3  | module           | VARCHAR(32)   | YES  |                   | 				  |
| 4  | module_field_id  | INT(11)       | YES  |                   | 				  |
| 5  | activity         | VARCHAR(255)  | YES  |                   | 				  |
| 6  | activity_date    | TIMESTAMP     | NO   | CURRENT_TIMESTAMP | 				  |
| 7  | icon             | VARCHAR(32)   | YES  | fa-coffee 		   | 				  |
| 8  | value1           | VARCHAR(100)  | YES  |                   | 				  |
| 9  | value2	        | VARCHAR(100)  | YES  |                   | 				  |
| 10 | deleted	        | INT(11)	    | NO   |    0              | 				  |


## Activity_transaction

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | user_id        	| INT(11)       		| YES  |         | 				    |
| 3  | order_id         | INT(11)       		| YES  |         | 				    |
| 4  | item_id          | INT(11)       		| YES  |         | 				    |
| 5  | subject          | ENUM('Klien','Owner') | YES  |         | 				    |
| 6  | activity         | VARCHAR(255)  		| YES  |         | 				    |
| 7  | activity_date    | INT(11)       		| YES  |         | 				    |
| 8  | color          	| VARCHAR(50)   		| YES  |         | 				    |


## Approval

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11)      | NO   |         | AUTO_INCREMENT    |
| 2  | approval_no     	| INT(11)      | YES  |         | 				    |
| 3  | decription       | INT(11)      | YES  |         | 				    |
| 4  | order_id         | INT(11)      | YES  |         | 				    |
| 5  | featured_image   | VARCHAR(255) | YES  |         | 				    |
| 6  | date_sent        | VARCHAR(50)  | YES  |         | 				    |


## Articles

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11)      | NO   |         | AUTO_INCREMENT    |
| 2  | title     		| VARCHAR(255) | YES  |         | 				    |
| 3  | slug       		| VARCHAR(255) | YES  |         | 				    |
| 4  | author         	| INT(11)      | YES  |         | 				    |
| 5  | body   			| TEXT         | YES  |         | 				    |
| 6  | featured_image   | VARCHAR(255) | YES  |         | 				    |
| 7  | status     		| INT(11)      | YES  |         | 				    |
| 8  | published_at     | VARCHAR(50)  | YES  |         | 				    |
| 9  | created         	| VARCHAR(50)  | YES  |         | 				    |
| 10 | modified   		| VARCHAR(50)  | YES  |         | 				    |


## Attachment

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11)      | NO   |         | AUTO_INCREMENT    |
| 2  | req_id     		| INT(11)      | YES  |         | 				    |
| 3  | filename       	| VARCHAR(255) | YES  |         | 				    |
| 4  | token         	| VARCHAR(255) | YES  |         | 				    |
| 5  | created_at   	| INT(11)      | YES  |         | 				    |


## Bank

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11)      | NO   |         | AUTO_INCREMENT    |
| 2  | title     		| VARCHAR(50)  | YES  |         | 				    |
| 3  | rekening       	| VARCHAR(50)  | YES  |         | 				    |
| 4  | anam         	| VARCHAR(50)  | YES  |         | 				    |
| 5  | image   			| VARCHAR(50)  | YES  |         | 				    |
| 6  | status   		| TINYINT(1)   | YES  |         | 				    |
| 7  | created_at     	| INT(11)      | YES  |         | 				    |


## Banner

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11)      | NO   |         | AUTO_INCREMENT    |
| 2  | judul     		| VARCHAR(255) | NO   |         | 				    |
| 3  | deskripsi       	| VARCHAR(255) | NO   |         | 				    |
| 4  | link         	| VARCHAR(255) | NO   |         | 				    |
| 5  | big_pic   		| VARCHAR(255) | NO   |         | 				    |
| 6  | status   		| TINYINT(4)   | NO   |         | 				    |
| 7  | created_at     	| TIMESTAMP    | YES  |         | 				    |
| 8  | updated_at     	| TIMESTAMP    | YES  |         | 				    |


## Chats

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | order_id        	| INT(11)       		| YES  |         | 				    |
| 3  | cat_chat         | ENUM('Klien','Owner') | YES  |         | 				    |
| 4  | user_id          | INT(11)       		| YES  |         | 				    |
| 5  | chat_body        | VARCHAR(255)          | YES  |         | 				    |
| 6  | created_at       | INT(11)       		| YES  |         | 				    |
| 7  | status		    | TINYINT(1)       		| YES  |         | 				    |


## Ci_sessions

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | VARCHAR(128) | YES  |         |                   |
| 2  | ip_address     	| VARCHAR(50)  | YES  |         | 				    |
| 3  | timestamp       	| INT(10) 	   | YES  |     0   | 				    |
| 4  | data         	| BLOB		   | YES  |         | 				    |


## Clients

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11) 	   | NO   |         |  AUTO_INCREMENT   |
| 2  | nama     		| VARCHAR(255) | NO   |         | 				    |
| 3  | images       	| VARCHAR(255) | NO   |         | 				    |
| 4  | status         	| TINYINT(4)   | NO   |         | 				    |
| 5  | created_at       | TIMESTAMP    | YES  |         | 				    |
| 6  | updated_at       | TIMESTAMP    | YES  |         | 				    |


## Comments

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11) 	   | NO   |         |  AUTO_INCREMENT   |
| 2  | req_id     		| INT(11) 	   | YES  |         | 				    |
| 3  | user_id       	| INT(11) 	   | YES  |         | 				    |
| 4  | comment_id       | VARCHAR(255) | YES  |         | 				    |
| 5  | created_at       | INT(11) 	   | YES  |         | 				    |
| 6  | status           | TINYINT(1)   | YES  |         | 				    |


## Convertion_log

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11) 	   | NO   |         |  AUTO_INCREMENT   |
| 2  | user_id     		| INT(11) 	   | NO   |    0    | 				    |
| 3  | coin_ammount     | INT(11) 	   | YES  |         | 				    |
| 4  | point_amount     | INT(11) 	   | YES  |         | 				    |
| 5  | desc             | TEXT 	       | YES  |         | 				    |
| 6  | created_at       | INT(11)      | YES  |         | 				    |


## Counter

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11) 	   | NO   |         |  AUTO_INCREMENT   |
| 2  | date     		| DATETIME 	   | YES  |         | 				    |
| 3  | counter          | INT(11) 	   | YES  |         | 				    |


## Discount

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype     | Null | Default | 		Extra 	    | 
| ---| ---------------- |:------------:| ----:| -------:| ----------------- |
| 1  | id               | INT(11) 	   | NO   |         |  AUTO_INCREMENT   |
| 2  | prod_id     		| INT(11) 	   | YES  |         | 				    |
| 3  | start     		| INT(11) 	   | YES  |         | 				    |
| 4  | end     			| INT(11) 	   | YES  |         | 				    |
| 5  | created_at       | INT(11)      | YES  |         | 				    |



## Discount_log

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | order_id        	| INT(11)       		| YES  |         | 				    |
| 3  | user_id         	| INT(11)       		| YES  |         | 				    |
| 4  | amount          	| FLOAT(10,2)       	| YES  |         | 				    |
| 5  | discount_desc    | VARCHAR(255)          | YES  |         | 				    |
| 6  | discount_type    | ENUM('coupon','coin') | YES  |         | 				    |
| 7  | created_at       | INT(11)       		| YES  |         | 				    |
| 8  | status		    | TINYINT(1)       		| YES  |         | 				    |


## Email_templates

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | template_id      | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | email_group     	| VARCHAR(150)       	| YES  |         | 				    |
| 3  | subject         	| VARCHAR(255)       	| YES  |         | 				    |
| 4  | template_body   	| TEXT              	| YES  |         | 				    |


## Enquiries

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | date_created     | INT(11)       		| YES  |         | 				    |
| 3  | sent_by         	| INT(11)       		| YES  |         | 				    |
| 4  | sent_to         	| INT(11)       		| YES  |         | 				    |
| 5  | subject    		| VARCHAR(255)          | YES  |         | 				    |
| 6  | message    		| TEXT                  | YES  |         | 				    |
| 7  | code       		| VARCHAR(6)       		| YES  |         | 				    |
| 8  | urgent		    | TINYINT(1)       		| YES  |         | 				    |
| 9  | opened           | INT(1)        		| YES  |         | 				    |
| 10 | ranking		    | INT(11)	       		| YES  |         | 				    |


## Enquiry

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | sent_by     		| INT(11)       		| YES  |         | 				    |
| 3  | sent_to         	| INT(11)       		| YES  |         | 				    |
| 4  | subjek         	| VARCHAR(255)       	| YES  |         | 				    |
| 5  | pesan    		| TEXT                  | YES  |         | 				    |
| 6  | opened    		| TINYINT(2)            | YES  |         | 				    |
| 7  | created_at       | TIMESTAMP       		| YES  |         | 				    |
| 8  | updated_at	    | TIMESTAMP       		| YES  |         | 				    |


## Events

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | title     		| VARCHAR(255)  		| YES  |         | 				    |
| 3  | description      | TEXT          		| YES  |         | 				    |
| 4  | image         	| TEXT              	| YES  |         | 				    |
| 5  | start    		| DATE                  | YES  |         | 				    |
| 6  | end    			| DATE                  | YES  |         | 				    |
| 7  | code       		| INT(20)       		| YES  |         | 				    |
| 8  | url	    		| VARCHAR(255)    		| YES  |         | 				    |
| 9  | client           | VARCHAR(255)  		| YES  |         | AUTO_INCREMENT   |
| 10 | price     		| DECIMAL(12,2)   		| YES  |         | 				    |
| 11 | province      	| VARCHAR(255)  		| YES  |         | 				    |
| 12 | city         	| VARCHAR(255)       	| YES  |         | 				    |
| 13 | project    		| INT(11)               | YES  |         | 				    |
| 14 | added_by    		| INT(11)               | YES  |         | 				    |
| 15 | className       	| VARCHAR(255)    		| YES  | m-fc-event--danger m-fc-event--solid-warning         | 				    |
| 16 | modified	    	| TIMESTAMP       		| YES  | CURRENT_TIMESTAMP        | 				    |
| 17 | created	    	| DATETIME       		| YES  |         | 				    |


## Faqs

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | pertanyaan     	| VARCHAR(255)  		| NO   |         | 				    |
| 3  | jawaban      	| TEXT          		| NO   |         | 				    |
| 4  | status         	| TINYINT(4)           	| NO   |         | 				    |
| 5  | created_at    	| TIMESTAMP             | YES  |         | 				    |
| 6  | updated_at    	| TIMESTAMP             | YES  |         | 				    |


## File_req

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | id_req     		| INT(11)		  		| NO   |         | 				    |
| 3  | nama_file      	| VARCHAR(255)  		| NO   |         | 				    |
| 4  | tipe         	| VARCHAR(50)          	| NO   |         | 				    |
| 5  | ukuran    		| VARCHAR(50)           | NO   |         | 				    |


## Galeri

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | judul     		| VARCHAR(255)  		| NO   |         | 				    |
| 3  | big_pic      	| VARCHAR(255)  		| NO   |         | 				    |
| 4  | small_pic        | VARCHAR(255)         	| NO   |         | 				    |
| 5  | kategori    		| VARCHAR(255)          | NO   |         | 				    |
| 6  | status    		| TINYINT(4)            | NO   |         | 				    |
| 7  | created_at    	| TIMESTAMP             | YES  |         | 				    |
| 8  | updated_at    	| TIMESTAMP             | YES  |         | 				    |


## Gambar

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | image     		| VARCHAR(255)	  		| YES  |         | 				    |
| 3  | type      		| VARCHAR(255)  		| YES  |         | 				    |
| 4  | token         	| VARCHAR(255)         	| YES  |         | 				    |


## Events

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      					| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:			| ----:| -------:| ---------------- |
| 1  | inv_id           | INT(11)       					| NO   |         | AUTO_INCREMENT   |
| 2  | reference_no    	| VARCHAR(32)  	  					| YES  |         | 				    |
| 3  | approve_no       | VARCHAR(32)   					| YES  |         | 				    |
| 4  | client         	| VARCHAR(64)       				| YES  |         | 				    |
| 5  | id_transaction   | INT(11)               			| YES  |         | 				    |
| 6  | due_date    		| VARCHAR(40)           			| YES  |         | 				    |
| 7  | notes       		| TEXT          					| YES  |         | 				    |
| 8  | tax	    		| DECIMAL(10,2)    					| YES  |  10.00  | 			    	|
| 9  | tax2             | DECIMAL(10,2)  					| YES  |  0.00   |              	|
| 10 | discount     	| DECIMAL(10,2)   					| YES  |  0.00   | 				    |
| 11 | status      		| ENUM('Unpaid','Paid', Cancelled)  | YES  | Unpaid  | 				    |
| 12 | archived         | VARCHAR(255)       				| YES  |    0    | 				    |
| 13 | date_sent    	| VARCHAR(64)               		| YES  |         | 				    |
| 14 | date_saved    	| TIMESTAMP               			| YES  |         | 				    |
| 15 | inv_deleted      | ENUM('Yes','No')    				| YES  |   No    | 				    |
| 16 | emailed	    	| ENUM('Yes','No')       			| YES  |   No    | 				    |
| 17 | viewed	    	| ENUM('Yes','No')       			| YES  |   No    | 				    |
| 18 | alert_overdue    | INT(11)               			| YES  |    0    | 				    |
| 19 | extra_fee    	| DECIMAL(10,2)               		| YES  |  0.00   | 				    |


## Items

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      			| Null | Default   		   | 		Extra 	  | 
| ---| ---------------- |:-------------------------:| ----:| ----------------- | ---------------- |
| 1  | item_id          | INT(11)       			| NO   |           		   | AUTO_INCREMENT   |
| 2  | item_tax_rate    | DECIMAL(10,2)  	  		| YES  |  0.00     		   | 				  |
| 3  | item_tax_total   | DECIMAL(10,2)   			| NO   |  0.00     		   | 				  |
| 4  | quantity         | DECIMAL(10,2)       		| YES  |  0.00     		   | 				  |
| 5  | total_cost   	| DECIMAL(10,2)             | YES  |  0.00     		   | 				  |
| 6  | percent    		| DECIMAL(10,2)           	| YES  |  0.00     		   | 				  |
| 7  | invoice_id       | INT(11)          			| NO   |           		   | 				  |
| 8  | item_name	    | VARCHAR(255)    			| YES  | Item Name 		   | 			   	  |
| 9  | item_desc        | LONGTEXT  	            | YES  |           		   |              	  |
| 10 | unit_cost     	| DECIMAL(10,2)   			| YES  |  0.00     		   | 				  |
| 11 | item_order      	| INT(11)  					| YES  |  0        		   | 				  |
| 12 | date_saved       | TIMESTAMP       			| NO   | CURRENT_TIMESTAMP | 				  |


## Items_saved

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default   | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| --------- | ------------------ |
| 1  | item_id          | INT(11)       		| NO   |           | AUTO_INCREMENT     |
| 2  | item_name     	| VARCHAR(200)  		| YES  | Item Name | 				    |
| 3  | item_desc      	| LONGTEXT  			| YES  |           | 				    |
| 4  | unit_cost        | DECIMAL(10,2)         | YES  |  0.00     | 				    |
| 5  | item_tax_rate    | DECIMAL(10,2)         | YES  |  0.00     | 				    |
| 6  | item_tax_total  	| DECIMAL(10,2)         | YES  |  0.00     | 				    |
| 7  | quantity    		| DECIMAL(10,2)         | YES  |  0.00     | 				    |
| 8  | total_cost    	| DECIMAL(10,2)         | YES  |  0.00     | 				    |
| 9  | deleted    		| ENUM('Yes','No')      | YES  |  No       | 				    |


## Kabupaten

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id_kab           | CHAR(4)       		| NO   |         |                  |
| 2  | id_prov     		| CHAR(2)	  			| NO   |         | 				    |
| 3  | nama      		| TINYTEXT   			| NO   |         | 				    |
| 4  | id_jenis         | INT(11)         		| NO   |         | 				    |
| 5  | status           | TINYINT(2)         	| NO   |         | 				    |


## Kecamatan

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id_kec           | CHAR(6)       		| NO   |         |                  |
| 2  | id_kab     		| CHAR(4)	  			| NO   |         | 				    |
| 3  | nama      		| TINYTEXT   			| NO   |         | 				    |
| 4  | status           | TINYINT(2)         	| YES  |         | 				    |


## Kliens

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id           	| INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | username    		| VARCHAR(255)  	  	| NO   |         | 				    |
| 3  | user_code        | VARCHAR(50)   		| NO   |         | 				    |
| 4  | company         	| VARCHAR(255)       	| NO   |         | 				    |
| 5  | pword   			| VARCHAR(255)          | NO   |         | 				    |
| 6  | email    		| VARCHAR(255)          | NO   |         | 				    |
| 7  | no_telp       	| VARCHAR(255)          | NO   |         | 				    |
| 8  | gender	    	| VARCHAR(50)    		| NO   |         | 			    	|
| 9  | tgl_lahir        | DATE  				| NO   |         |              	|
| 10 | alamat     		| VARCHAR(255)   		| NO   |         | 				    |
| 11 | pic      		| VARCHAR(255)  		| NO   |         | 				    |
| 12 | rekening         | VARCHAR(255)       	| NO   |         | 				    |
| 13 | bank    			| VARCHAR(255)          | NO   |         | 				    |
| 14 | atasnama    		| VARCHAR(255)          | NO   |         | 				    |
| 15 | ktp      		| VARCHAR(255)    		| NO   |         | 				    |
| 16 | npwp	    		| VARCHAR(255)       	| NO   |         | 				    |
| 17 | status	    	| TINYINT(4)       		| NO   |    1    | 				    |
| 18 | verified    		| TINYINT(4)            | NO   |    0    | 				    |
| 19 | waktu_dibuat    	| DATETIME              | NO   |         | 				    |
| 20 | last_login	   	| INT(11)       		| NO   |         | 				    |
| 21 | created_at	    | TIMESTAMP       		| YES  |         | 				    |
| 22 | updated_at    	| TIMESTAMP             | YES  |         | 				    |
| 23 | coin    			| FLOAT               	| YES  |         | 				    |


## Komplain

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | order_id     	| INT(11)  				| YES  |         | 				    |
| 3  | user_id      	| INT(11)  				| YES  |         | 				    |
| 4  | headline         | VARCHAR(255)         	| YES  |         | 				    |
| 5  | komplain_body    | VARCHAR(255)          | YES  |         | 				    |
| 6  | image    		| VARCHAR(255)          | YES  |         | 				    |
| 7  | created_at    	| INT(11)               | YES  |         | 				    |
| 8  | status    	    | TINYINT(1)            | YES  |         | 				    |
| 9  | opened    		| TINYINT(1)            | YES  |         | 				    |
| 10 | archive    		| TINYINT(1)            | YES  |         | 				    |


## Kontaks

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | nama     		| VARCHAR(255)			| NO   |         | 				    |
| 3  | telpon      		| VARCHAR(255)			| NO   |         | 				    |
| 4  | email         	| VARCHAR(255)         	| NO   |         | 				    |
| 5  | subjek    		| VARCHAR(255)          | NO   |         | 				    |
| 6  | pesan    		| TEXT          		| NO   |         | 				    |
| 7  | opened    		| TINYINT(2)            | NO   |    0    | 				    |
| 8  | waktu_dibuat    	| DATETIME	            | NO   |         | 				    |
| 9  | created_at    	| TIMESTAMP             | YES  |         | 				    |
| 10 | updated_at    	| TIMESTAMP             | YES  |         | 				    |


## Laporan

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | order_id     	| INT(11)				| YES  |         | 				    |
| 3  | item_id      	| INT(11)				| YES  |         | 				    |
| 4  | user_id         	| INT(11)         		| YES  |         | 				    |
| 5  | waktu    		| ENUM('Siang','Malam') | YES  |         | 				    |
| 6  | image    		| VARCHAR(255)  		| YES  |         | 				    |
| 7  | created_at    	| INT(11)            	| YES  |         | 				    |
| 8  | status    		| TINYINT(1)	        | YES  |         | 				    |
| 9  | opened    		| TINYINT(1)            | YES  |         | 				    |


## Likes

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | like_id          | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | user_id     		| INT(11)				| YES  |         | 				    |
| 3  | prod_id      	| VARCHAR(50)			| YES  |         | 				    |


## Loghistory

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | sent_by      	| INT(11)   			| NO   |         | 				    |
| 3  | sent_to         	| TEXT              	| NO   |         | 				    |
| 4  | subjek    		| VARCHAR(255)          | NO   |         | 				    |
| 5  | pesan    		| TEXT          		| NO   |         | 				    |
| 6  | opened    		| TINYINT(4)            | NO   |         | 				    |
| 7  | created_at    	| TIMESTAMP             | YES  |         | 				    |
| 8  | updated_at    	| TIMESTAMP             | YES  |         | 				    |


## Log_activity

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | name      		| VARCHAR(255)   		| YES  |         | 				    |
| 3  | data         	| TEXT              	| YES  |         | 				    |
| 4  | created_at    	| INT(11)	            | YES  |         | 				    |


## Maintain_report

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | prod_id      	| INT(11)   			| YES  |         | 				    |
| 3  | image         	| VARCHAR(255)          | YES  |         | 				    |
| 4  | type    			| VARCHAR(50)           | YES  |         | 				    |
| 5  | token    		| VARCHAR(50)           | YES  |         | 				    |
| 6  | created_at    	| INT(11)            	| YES  |         | 				    |


## Materi

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        		| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- |:---------------------:| ----:| -------:| ---------------- |
| 1  | id               | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | order_id      	| INT(11)   			| YES  |         | 				    |
| 3  | item_id         	| INT(11)              	| YES  |         | 				    |
| 4  | user_id    		| INT(11)        	  	| YES  |         | 				    |
| 5  | materi    		| VARCHAR(255)         	| YES  |         | 				    |
| 6  | code    			| VARCHAR(255)          | YES  |         | 				    |
| 7  | created_at    	| INT(11)               | YES  |         | 				    |
| 8  | status    		| TINYINT(1)            | YES  |         | 				    |
| 9  | opened    		| TINYINT(1)            | YES  |         | 				    |
| 10 | archive    		| TINYINT(1)            | YES  |         | 				    |
| 11 | selected    		| TINYINT(1)            | YES  |         | 				    |
| 12 | download    		| TINYINT(1)            | YES  |         | 				    |


## Notifications

Cupcake ipsum dolor sit amet pie apple pie. Pie apple pie fruitcake marzipan I love I love soufflé gummi bears. I love cheesecake muffin. I love dragée chupa chups cotton candy pastry tiramisu sweet.

| #  | Name        			| Datatype      		| Null | Default | 		Extra 	    | 
| ---| ---------------- 	|:---------------------:| ----:| -------:| ---------------- |
| 1  | notify_id            | INT(11)       		| NO   |         | AUTO_INCREMENT   |
| 2  | user_target      	| INT(11)   			| YES  |         | 				    |
| 3  | module         		| VARCHAR(50)          	| YES  |         | 				    |
| 4  | module_field_id    	| INT(11)        	  	| YES  |         | 				    |
| 5  | notify_title    		| VARCHAR(255)         	| YES  |         | 				    |
| 6  | notification    		| VARCHAR(255)          | YES  |         | 				    |
| 7  | notification_date    | TIMESTAMP             | YES  |         | 				    |
| 8  | image    			| VARCHAR(255)          | YES  |         | 				    |
| 9  | icon    				| VARCHAR(255)          | YES  |         | 				    |
| 10 | value1    			| VARCHAR(100)          | YES  |         | 				    |
| 11 | value2    			| VARCHAR(100)          | YES  |         | 				    |
| 12 | opened    			| TINYINT(1)            | YES  |         | 				    |
| 13 | deleted    			| TINYINT(1)            | YES  |         | 				    |