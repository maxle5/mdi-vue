
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterSearch from "../../src/components/MdiPrinterSearch.vue";

test("MdiPrinterSearch snapshot", () => {
  const wrapper = mount(MdiPrinterSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
