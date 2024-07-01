
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersSearch from "../../src/components/MdiLayersSearch.vue";

test("MdiLayersSearch snapshot", () => {
  const wrapper = mount(MdiLayersSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
