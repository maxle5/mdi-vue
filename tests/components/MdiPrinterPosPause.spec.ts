
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosPause from "../../src/components/MdiPrinterPosPause.vue";

test("MdiPrinterPosPause snapshot", () => {
  const wrapper = mount(MdiPrinterPosPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
