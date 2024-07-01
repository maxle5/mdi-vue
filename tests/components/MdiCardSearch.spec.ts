
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardSearch from "../../src/components/MdiCardSearch.vue";

test("MdiCardSearch snapshot", () => {
  const wrapper = mount(MdiCardSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
