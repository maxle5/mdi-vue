
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosOffOutline from "../../src/components/MdiPrinterPosOffOutline.vue";

test("MdiPrinterPosOffOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
