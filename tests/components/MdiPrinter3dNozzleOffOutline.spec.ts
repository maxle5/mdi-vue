
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleOffOutline from "../../src/components/MdiPrinter3dNozzleOffOutline.vue";

test("MdiPrinter3dNozzleOffOutline snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
