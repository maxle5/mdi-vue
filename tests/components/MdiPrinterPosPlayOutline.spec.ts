
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosPlayOutline from "../../src/components/MdiPrinterPosPlayOutline.vue";

test("MdiPrinterPosPlayOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
