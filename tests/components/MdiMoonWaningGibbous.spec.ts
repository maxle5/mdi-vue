
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonWaningGibbous from "../../src/components/MdiMoonWaningGibbous.vue";

test("MdiMoonWaningGibbous snapshot", () => {
  const wrapper = mount(MdiMoonWaningGibbous, {});
  expect(wrapper.html()).toMatchSnapshot();
});
