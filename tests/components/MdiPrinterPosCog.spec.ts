
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosCog from "../../src/components/MdiPrinterPosCog.vue";

test("MdiPrinterPosCog snapshot", () => {
  const wrapper = mount(MdiPrinterPosCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
