
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveSearch from "../../src/components/MdiArchiveSearch.vue";

test("MdiArchiveSearch snapshot", () => {
  const wrapper = mount(MdiArchiveSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
