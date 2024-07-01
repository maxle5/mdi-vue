
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSearch from "../../src/components/MdiFileSearch.vue";

test("MdiFileSearch snapshot", () => {
  const wrapper = mount(MdiFileSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
