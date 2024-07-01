
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosAlert from "../../src/components/MdiPrinterPosAlert.vue";

test("MdiPrinterPosAlert snapshot", () => {
  const wrapper = mount(MdiPrinterPosAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
