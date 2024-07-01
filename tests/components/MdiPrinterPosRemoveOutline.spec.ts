
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosRemoveOutline from "../../src/components/MdiPrinterPosRemoveOutline.vue";

test("MdiPrinterPosRemoveOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
