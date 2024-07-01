
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleOutline from "../../src/components/MdiPrinter3dNozzleOutline.vue";

test("MdiPrinter3dNozzleOutline snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
