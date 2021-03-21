odoo.define('pos_cashier_access_stock.pos_stock_product', function (require) {
    "use strict";
    
    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    var Model = require("web.Model");
    var core = require('web.core');
    var _t = core._t;

    var buttonStockProduct = screens.ActionButtonWidget.extend({
        template: 'buttonStockProduct',
        button_click: function () {
            var self = this;
            var order = this.pos.get_order()
            if (order) {
                var selected_orderline = order.selected_orderline;
                if (selected_orderline) {
                    var product = selected_orderline.product;
                    new Model('product.template')
                        .query(['stock_in_warehouse'])
                        .filter([['id', '=', product.id]])
                        .all()
                        .then(
                            function(product_tmp) {
                                return self.pos.gui.show_popup('alert', {
                                    title: 'Stok Produk di Gudang',
                                    body: product['display_name'] + ' memiliki stok ' + product_tmp[0].stock_in_warehouse + ' di gudang'
                                });
                            },
                            function(err, event){
                                event.preventDefault();
                                console.error(err);
                            }
                        );
                } else {
                    return this.pos.gui.show_popup('error', {
                        title: '!!! Warning !!!',
                        body: 'Please select line want change unit of measure'
                    });
                }
            } else {
                return this.pos.gui.show_popup('error', {
                    title: '!!! Warning !!!',
                    body: 'Order null'
                });
            }

        }
    });
    screens.define_action_button({
        'name': 'buttonStockProduct',
        'widget': buttonStockProduct,
    });
});