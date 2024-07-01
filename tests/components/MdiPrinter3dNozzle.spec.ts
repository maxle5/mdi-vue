
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzle from "../../src/components/MdiPrinter3dNozzle.vue";

test("MdiPrinter3dNozzle snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
