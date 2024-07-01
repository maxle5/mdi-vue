
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterWireless from "../../src/components/MdiPrinterWireless.vue";

test("MdiPrinterWireless snapshot", () => {
  const wrapper = mount(MdiPrinterWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
