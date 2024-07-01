
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleHeat from "../../src/components/MdiPrinter3dNozzleHeat.vue";

test("MdiPrinter3dNozzleHeat snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleHeat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
