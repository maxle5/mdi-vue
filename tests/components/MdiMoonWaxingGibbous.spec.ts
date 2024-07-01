
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonWaxingGibbous from "../../src/components/MdiMoonWaxingGibbous.vue";

test("MdiMoonWaxingGibbous snapshot", () => {
  const wrapper = mount(MdiMoonWaxingGibbous, {});
  expect(wrapper.html()).toMatchSnapshot();
});
