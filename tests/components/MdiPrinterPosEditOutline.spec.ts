
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosEditOutline from "../../src/components/MdiPrinterPosEditOutline.vue";

test("MdiPrinterPosEditOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
