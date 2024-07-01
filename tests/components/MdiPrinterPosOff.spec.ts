
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosOff from "../../src/components/MdiPrinterPosOff.vue";

test("MdiPrinterPosOff snapshot", () => {
  const wrapper = mount(MdiPrinterPosOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
