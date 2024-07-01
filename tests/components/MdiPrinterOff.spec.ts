
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterOff from "../../src/components/MdiPrinterOff.vue";

test("MdiPrinterOff snapshot", () => {
  const wrapper = mount(MdiPrinterOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
