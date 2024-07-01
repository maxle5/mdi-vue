
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosRefresh from "../../src/components/MdiPrinterPosRefresh.vue";

test("MdiPrinterPosRefresh snapshot", () => {
  const wrapper = mount(MdiPrinterPosRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
