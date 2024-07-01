
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosRefreshOutline from "../../src/components/MdiPrinterPosRefreshOutline.vue";

test("MdiPrinterPosRefreshOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
