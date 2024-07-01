
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterSettings from "../../src/components/MdiPrinterSettings.vue";

test("MdiPrinterSettings snapshot", () => {
  const wrapper = mount(MdiPrinterSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
