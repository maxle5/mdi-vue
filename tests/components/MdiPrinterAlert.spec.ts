
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterAlert from "../../src/components/MdiPrinterAlert.vue";

test("MdiPrinterAlert snapshot", () => {
  const wrapper = mount(MdiPrinterAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
