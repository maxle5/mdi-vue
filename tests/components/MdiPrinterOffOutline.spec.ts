
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterOffOutline from "../../src/components/MdiPrinterOffOutline.vue";

test("MdiPrinterOffOutline snapshot", () => {
  const wrapper = mount(MdiPrinterOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
