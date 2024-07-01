
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosWrench from "../../src/components/MdiPrinterPosWrench.vue";

test("MdiPrinterPosWrench snapshot", () => {
  const wrapper = mount(MdiPrinterPosWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
