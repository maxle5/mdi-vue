
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosCheckOutline from "../../src/components/MdiPrinterPosCheckOutline.vue";

test("MdiPrinterPosCheckOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
