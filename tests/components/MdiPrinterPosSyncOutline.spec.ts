
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosSyncOutline from "../../src/components/MdiPrinterPosSyncOutline.vue";

test("MdiPrinterPosSyncOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
