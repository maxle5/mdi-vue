
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosCancel from "../../src/components/MdiPrinterPosCancel.vue";

test("MdiPrinterPosCancel snapshot", () => {
  const wrapper = mount(MdiPrinterPosCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
