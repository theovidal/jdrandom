var config = {
	title: 'JDRandom',
	logopath: '../img/jdrandom-favicon.png',
	showtitle: true,
	backgroundpath: '../img/bg-flou.png',
	basepath: '',
	versionspath: 'versions.php',
	filespath: 'versions'
};

(function( $ ) {
	var loading = {};
	loading.modal = $( '#loading' );

	loading.show = function() {
		this.modal.show();
	};

	loading.hide = function() {
		this.modal.hide();
	};

	function query( path, data, callback, method ) {
		method = method || 'GET';

		loading.show();

		if( !( method.toLowerCase() == 'get' || method.toLowerCase() == 'post' ) ) {
			if( data != null )
				$.extend( data, { '_method': method } );
			else
				data = { '_method': method };
			method = 'post';
		}

		$.ajax({
			url: config.basepath + ( config.basepath != '' ? '/' : '' ) + path,
			dataType: 'json',
			data: ( data != null ? data : {} ),
			method: method
		}).done( function( data ) {
			loading.hide();
			if( typeof data === 'object' && 'error' in data )
				alert( data.error );
			else
				callback( data );
		}).fail( function( xhr, textStatus, errorThrown ) {
			loading.hide();
			alert( 'Erreur inconnue.' );
		});
	}

	function Layout() {
		this.mdl_layout_title = $( '.mdl-layout-title' );
		this.mdl_layout_header = $( '.mdl-layout__header' );
		this.mdl_nav = $( '.mdl-navigation' );
		this.mdl_content = $( '#content' );
		this.md = window.markdownit();
		this.updateHeader();
	}
	Layout.prototype.updateHeader = function() {
		if( config.hasOwnProperty( 'backgroundpath' ) && config.backgroundpath != '' )
			this.mdl_layout_header.css( 'background', 'url(' + config.backgroundpath + ') center / cover' );
		document.title = config.title;
		if( config.hasOwnProperty( 'logopath' ) && config.logopath != '' ) {
			this.mdl_layout_title.append( '<img src="' + config.logopath + '" />' );
			if( config.showtitle )
				this.mdl_layout_title.append( config.title );
		} else {
			this.mdl_layout_title.text( config.title );
		}
	};
	Layout.prototype.addMenuItem = function( text, url ) {
		var el = $( '<a class="mdl-navigation__link" href="' + url + '" data-text="' + text + '">' + text + '</a>' );
		this.mdl_nav.append( el );
		return el;
	};
	Layout.prototype.clearMenu = function() {
		this.mdl_nav.empty();
	};
	Layout.prototype.updateMenu = function() {
		var obj = this;
		query( config.versionspath, {}, function( data ) {
			obj.versions = data;
			obj.renderMenu();
		});
	};
	Layout.prototype.renderMenu = function() {
		this.clearMenu();
		var obj = this;
		obj.addMenuItem( 'Accueil', '#home' );
		$.each( this.versions, function( index, element ) {
			if(element.toLowerCase() != "home"){
				obj.addMenuItem( 'v' + element, '#' + element );
			}
		});
	};
	Layout.prototype.selectVersion = function( version ) {
		var path = config.basepath + ( config.basepath != '' ? '/' : '' ) + config.filespath + '/' + version + '.md';
		var obj = this;
		loading.show();
		$.ajax({
			url: path,
			dataType: 'text'
		}).done( function( data ) {
			loading.hide();
			if( typeof data === 'object' && 'error' in data )
				alert( data.error );
			else {
				obj.renderVersion( version, data );
			}
		}).fail( function( xhr, textStatus, errorThrown ) {
			loading.hide();
			alert( 'Version invalide.' );
		});
	};
	Layout.prototype.renderVersion = function( version, text ) {
		$( '.mdl-navigation .mdl-navigation__link.active' ).removeClass( 'active' );
		this.mdl_content.empty();
		$( '.mdl-navigation .mdl-navigation__link[data-text="v' + version + '"]' ).addClass( 'active' );
		this.mdl_content.html( this.md.render( text ) );
	};

	var layout = new Layout();
	layout.updateMenu();

	$( window ).on( 'hashchange', function() {
		layout.selectVersion( location.hash.slice( 1 ) );
	});

	if( window.location.hash.substr( 1 ) != "" ) {
		$( window ).trigger( 'hashchange' );
	}
})( jQuery );