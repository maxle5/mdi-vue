
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosPlusOutline from "../../src/components/MdiPrinterPosPlusOutline.vue";

test("MdiPrinterPosPlusOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
