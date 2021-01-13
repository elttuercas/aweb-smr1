$(function ()
{
    let modal: JQuery     = $('#ppModalInfo');
    let modalLink: JQuery = $('#ppModalDis');
    let closeBtn: JQuery  = $($('.modalClose')[0]);

    modalLink.on('click', function ()
    {
        modal.css(
            {
                display: 'block'
            }
        );
    });

    closeBtn.on('click', function ()
    {
        modal.css(
            {
                display: 'none'
            }
        );
    });

    $(window).on('click', function (e: Event)
    {
        if (e.target == modal[0])
        {
            modal.css(
                {
                    display: 'none'
                }
            );
        }
    });
});