
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSearch from "../../src/components/MdiImageSearch.vue";

test("MdiImageSearch snapshot", () => {
  const wrapper = mount(MdiImageSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
