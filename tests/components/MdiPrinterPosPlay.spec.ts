
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosPlay from "../../src/components/MdiPrinterPosPlay.vue";

test("MdiPrinterPosPlay snapshot", () => {
  const wrapper = mount(MdiPrinterPosPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
