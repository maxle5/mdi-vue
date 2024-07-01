
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosPlus from "../../src/components/MdiPrinterPosPlus.vue";

test("MdiPrinterPosPlus snapshot", () => {
  const wrapper = mount(MdiPrinterPosPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
