
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapSearch from "../../src/components/MdiMapSearch.vue";

test("MdiMapSearch snapshot", () => {
  const wrapper = mount(MdiMapSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
