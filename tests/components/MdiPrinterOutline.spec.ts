
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterOutline from "../../src/components/MdiPrinterOutline.vue";

test("MdiPrinterOutline snapshot", () => {
  const wrapper = mount(MdiPrinterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
