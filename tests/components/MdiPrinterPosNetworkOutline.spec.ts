
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosNetworkOutline from "../../src/components/MdiPrinterPosNetworkOutline.vue";

test("MdiPrinterPosNetworkOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
