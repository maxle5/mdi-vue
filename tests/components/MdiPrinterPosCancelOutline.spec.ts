
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosCancelOutline from "../../src/components/MdiPrinterPosCancelOutline.vue";

test("MdiPrinterPosCancelOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
