
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosMinusOutline from "../../src/components/MdiPrinterPosMinusOutline.vue";

test("MdiPrinterPosMinusOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
