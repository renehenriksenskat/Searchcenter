<head>
<title>jQuery Handler</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<script>
function prepareSearchScreen() {
	// Vi starter med at sikre, at vi kan finde ClientContext inden vi starter p? noget som helst kode
	var clientContext;
	$(document).ready(function () {
			SP.SOD.executeFunc('sp.js', 'SP.ClientContext', execOperation);
		});

	function execOperation() {
			try {
                var searchText = $('#afslutSearch');

                $('#afslutSearch').parent().remove();

                $('.navbar').after(searchText);
                //$('#MSOZoneCell_WebPartWPQ6').remove();
                $('div[webpartID="bec78aa4-358b-4475-9d01-8763f1c3747b"]').parent().parent().remove();
                var brandingIndhold = $('.o365cs-nav-tenantBranding').html();
                //console.log(brandingIndhold);

                if (brandingIndhold == undefined) {
                    pause();
                }
                else {
                    $('.o365cs-nav-tenantBranding').html("<a class='o365cs-nav-tenantLogo_SKM o365button_SKM' role='link' id='O365_MainLink_TenantLogo_SKM' href='https://skat.sharepoint.com/sites/toldst' title='Toldstyrelsen' aria-label='Toldstyrelsen'><img id='O365_MainLink_TenantLogoImg_SKM' src='https://skat.sharepoint.com/sites/toldst/SiteAssets/__hubLogo__Toldst_logo.png' title='Toldstyrelsen' alt='Toldstyrelsen' style='max-height: 40px; margin: 5px;'></a>");
                }
					}
			catch (err) {
				alert(err);
			}
		}
}

function pause() {
    var timeoutID = window.setTimeout(setLogo, 700);
}

function setLogo() {
    $('.o365cs-nav-tenantBranding').html("<a class='o365cs-nav-tenantLogo_SKM o365button_SKM' role='link' id='O365_MainLink_TenantLogo_SKM' href='https://skat.sharepoint.com/sites/toldst' title='Toldstyrelsen' aria-label='Toldstyrelsen'><img id='O365_MainLink_TenantLogoImg_SKM' src='https://skat.sharepoint.com/sites/toldst/SiteAssets/__hubLogo__Toldst_logo.png' title='Toldstyrelsen' alt='Toldstyrelsen' style='max-height: 40px; margin: 5px;'></a>");
}
</script>


<html xmlns="http://www.w3.org/1999/xhtml" lang="da" xml:lang="da">
<script>
prepareSearchScreen();
</script>
</html>

