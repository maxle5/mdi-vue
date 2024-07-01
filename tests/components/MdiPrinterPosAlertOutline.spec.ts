
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosAlertOutline from "../../src/components/MdiPrinterPosAlertOutline.vue";

test("MdiPrinterPosAlertOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
