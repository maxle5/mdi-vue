
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosWrenchOutline from "../../src/components/MdiPrinterPosWrenchOutline.vue";

test("MdiPrinterPosWrenchOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosWrenchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
