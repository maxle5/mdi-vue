
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosSync from "../../src/components/MdiPrinterPosSync.vue";

test("MdiPrinterPosSync snapshot", () => {
  const wrapper = mount(MdiPrinterPosSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
