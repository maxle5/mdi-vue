
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleOff from "../../src/components/MdiPrinter3dNozzleOff.vue";

test("MdiPrinter3dNozzleOff snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
