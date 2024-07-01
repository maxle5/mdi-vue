
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosNetwork from "../../src/components/MdiPrinterPosNetwork.vue";

test("MdiPrinterPosNetwork snapshot", () => {
  const wrapper = mount(MdiPrinterPosNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
