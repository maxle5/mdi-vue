
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosCheck from "../../src/components/MdiPrinterPosCheck.vue";

test("MdiPrinterPosCheck snapshot", () => {
  const wrapper = mount(MdiPrinterPosCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
