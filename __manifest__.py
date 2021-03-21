{
    'name': 'Cashier Access Stock Product in POS View',
    'author': 'technoindo.com',
    'category': 'hidden',
    'version': '10.0',
    'summary': 'Summary the addon.',
    'description': '''Description the addon'''
                   ,
    'depends': ['point_of_sale'],
    'data': [
        "view/stock_product_template.xml",
    ],
    'qweb': [
        'static/src/xml/pos_stock_product.xml',
    ],
    'images': [''],
    'auto_install': False,
    'installable': True,
    'application': False,
}
