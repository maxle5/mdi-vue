
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosRemove from "../../src/components/MdiPrinterPosRemove.vue";

test("MdiPrinterPosRemove snapshot", () => {
  const wrapper = mount(MdiPrinterPosRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
