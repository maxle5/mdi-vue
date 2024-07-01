
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPos from "../../src/components/MdiPrinterPos.vue";

test("MdiPrinterPos snapshot", () => {
  const wrapper = mount(MdiPrinterPos, {});
  expect(wrapper.html()).toMatchSnapshot();
});
