
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseSearch from "../../src/components/MdiBriefcaseSearch.vue";

test("MdiBriefcaseSearch snapshot", () => {
  const wrapper = mount(MdiBriefcaseSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
