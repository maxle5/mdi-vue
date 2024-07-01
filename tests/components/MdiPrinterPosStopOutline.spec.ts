
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosStopOutline from "../../src/components/MdiPrinterPosStopOutline.vue";

test("MdiPrinterPosStopOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosStopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
