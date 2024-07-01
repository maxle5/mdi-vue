
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosStar from "../../src/components/MdiPrinterPosStar.vue";

test("MdiPrinterPosStar snapshot", () => {
  const wrapper = mount(MdiPrinterPosStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
