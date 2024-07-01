
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dNozzleAlert from "../../src/components/MdiPrinter3dNozzleAlert.vue";

test("MdiPrinter3dNozzleAlert snapshot", () => {
  const wrapper = mount(MdiPrinter3dNozzleAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
