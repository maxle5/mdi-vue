
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleHeatOutline from "../../src/components/MdiPrinter3dNozzleHeatOutline.vue";

test("MdiPrinter3dNozzleHeatOutline snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleHeatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
