
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHydraulicOilLevel from "../../src/components/MdiHydraulicOilLevel.vue";

test("MdiHydraulicOilLevel snapshot", () => {
  const wrapper = mount(MdiHydraulicOilLevel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
