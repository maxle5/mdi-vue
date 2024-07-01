
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosCogOutline from "../../src/components/MdiPrinterPosCogOutline.vue";

test("MdiPrinterPosCogOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
