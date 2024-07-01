
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterEye from "../../src/components/MdiPrinterEye.vue";

test("MdiPrinterEye snapshot", () => {
  const wrapper = mount(MdiPrinterEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
