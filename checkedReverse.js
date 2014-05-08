/**
 * Set the UI state to the opposite of a boolean value. ie. if the observable is true, the checkbox is not checked.
 */
ko.bindingHandlers.checkedReverse = {

    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {

        var value = valueAccessor();

        //Set the checkbox checked state to the reverse of the observable
        $(element).prop('checked', !value());

        //When clicking the checkbox, toggle the observable to the reverse value
        $(element).on('click.checkedReverse', function () {
            value(!this.checked);
        });

        //Clean up jQuery bindings if knockout removes the element
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).off('click.checkedReverse');
        });
    },

    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        //Subscribe to the value
        var value = ko.utils.unwrapObservable(valueAccessor());
        //Reverse the value in the UI
        $(element).prop('checked', !value);
    }

};