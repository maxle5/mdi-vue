
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookSearch from "../../src/components/MdiBookSearch.vue";

test("MdiBookSearch snapshot", () => {
  const wrapper = mount(MdiBookSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
