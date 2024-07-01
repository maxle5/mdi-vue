
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosStarOutline from "../../src/components/MdiPrinterPosStarOutline.vue";

test("MdiPrinterPosStarOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
