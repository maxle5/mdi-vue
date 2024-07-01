
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCharitySearch from "../../src/components/MdiCharitySearch.vue";

test("MdiCharitySearch snapshot", () => {
  const wrapper = mount(MdiCharitySearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
