
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosOutline from "../../src/components/MdiPrinterPosOutline.vue";

test("MdiPrinterPosOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
