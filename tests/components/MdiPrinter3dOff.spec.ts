
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinter3dOff from "../../src/components/MdiPrinter3dOff.vue";

test("MdiPrinter3dOff snapshot", () => {
  const wrapper = mount(MdiPrinter3dOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
