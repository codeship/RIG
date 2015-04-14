RIG SCSS Styleguide
===================

This Styleguide is a recommendation based on my experience when working in big teams or on bigger projects with a long livespan.
It's orienting heavily on BEM Pattern as this is really the best approach on css class namings when it comes to eliminating Side effects of css.

There are only a view parts where we want to differ to create cleaner and shorter naming convention when writing css classes.

## Convention:

#### Blocks

```
.block
```
A block Describes a element that will probably contain other elements. But to cover the case of very long names on blocks we recommend using camelcase as it improves the readability enormous.

```
.blockName
```
The thumbrule would be if it the classname consists of multiple words, start every word with a uppercase character.

```
.theUltimateSuperBlock
```

#### Elements
```
.block_element
```
If there is a nested Element in a Block you would use one `_` (underscore)

eg.:

```
.tweet_title
```

#### Modifiers

When using BEM Modifiers can end up being super long. You could end up with something like.
```
.tweet__title__link--active
```

This tends to be very long and is one of the main reasons people don't use the BEM approach.
So imagin this Element following the BEM pattern:
```
<a href="#link" class="tweet__title__link tweet__title__link--active">...</a>
```

This doenst look to good. So we want to make use of CSS classnamings and shorten this a little.

```
<a href="#link" class="tweet_title_link -active">...</a>
```

This approach is still as readable or maybe even more so but uses way less space.
As Modifiers are always attached to an elment anyway it does make sense to use only
```
.-modifier
```

When using SCSS you can make the relation even more clear when doing this:

```
.block {
  ...

  &.-modfier {
    ...
  }
}
```

## Using DATA Attributes

Data attributes can be very helpufull in a lot of cases. You can store custom data in them or use them as entry points for complex component relations.
Imagine this:
(Example in JADE)

```
li.flexMenu_block_item(data-ui-component="dropdown")
  a(href="javascript:void(0)", data-dropdown-element="toggle") sections
  ul(data-dropdown-element="dropdown", data-rig-ui-dropdown="circle")
    li: a(href="#typography") Typography
    li: a(href="#forms") Forms
    li: a(href="#grid") Grid
```

We define certain elements in this block by using data attributes. They are very descriptive and we have the possibility to reuse certain parts of those elements on whatever we like.

```
data-ui-component="dropdown"
```

This Defines a complex component. I also use this class for JS Interaction. Also apparently the Dropdown will consist of a button that toggles the dropdown and apparently a list, or Element that is the dropdown itself.
For this I would recommend using data element definitions like so:
```
data-dropdown-element="toggle"

data-dropdown-element="dropdown"
```

When using those Selectors in CSS or JS I would recommend using it without quotes as it saves typing time :D
```
[data-ui-component=block]
```

