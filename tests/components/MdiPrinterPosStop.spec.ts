
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosStop from "../../src/components/MdiPrinterPosStop.vue";

test("MdiPrinterPosStop snapshot", () => {
  const wrapper = mount(MdiPrinterPosStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
