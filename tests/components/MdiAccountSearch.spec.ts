
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSearch from "../../src/components/MdiAccountSearch.vue";

test("MdiAccountSearch snapshot", () => {
  const wrapper = mount(MdiAccountSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
