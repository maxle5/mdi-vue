
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabSearch from "../../src/components/MdiTabSearch.vue";

test("MdiTabSearch snapshot", () => {
  const wrapper = mount(MdiTabSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
