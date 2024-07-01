
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterCheck from "../../src/components/MdiPrinterCheck.vue";

test("MdiPrinterCheck snapshot", () => {
  const wrapper = mount(MdiPrinterCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
