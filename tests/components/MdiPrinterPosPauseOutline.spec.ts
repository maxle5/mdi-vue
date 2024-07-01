
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosPauseOutline from "../../src/components/MdiPrinterPosPauseOutline.vue";

test("MdiPrinterPosPauseOutline snapshot", () => {
  const wrapper = mount(MdiPrinterPosPauseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
