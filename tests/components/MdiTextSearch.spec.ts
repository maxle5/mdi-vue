
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextSearch from "../../src/components/MdiTextSearch.vue";

test("MdiTextSearch snapshot", () => {
  const wrapper = mount(MdiTextSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
