
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxSearch from "../../src/components/MdiTextBoxSearch.vue";

test("MdiTextBoxSearch snapshot", () => {
  const wrapper = mount(MdiTextBoxSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
