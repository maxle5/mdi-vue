
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSearch from "../../src/components/MdiCarSearch.vue";

test("MdiCarSearch snapshot", () => {
  const wrapper = mount(MdiCarSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
