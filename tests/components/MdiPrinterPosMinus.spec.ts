
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosMinus from "../../src/components/MdiPrinterPosMinus.vue";

test("MdiPrinterPosMinus snapshot", () => {
  const wrapper = mount(MdiPrinterPosMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
