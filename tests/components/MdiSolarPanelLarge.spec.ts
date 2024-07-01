
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolarPanelLarge from "../../src/components/MdiSolarPanelLarge.vue";

test("MdiSolarPanelLarge snapshot", () => {
  const wrapper = mount(MdiSolarPanelLarge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
