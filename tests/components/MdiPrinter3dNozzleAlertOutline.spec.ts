
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleAlertOutline from "../../src/components/MdiPrinter3dNozzleAlertOutline.vue";

test("MdiPrinter3dNozzleAlertOutline snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
