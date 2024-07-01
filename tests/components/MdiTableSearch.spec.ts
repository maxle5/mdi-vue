
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableSearch from "../../src/components/MdiTableSearch.vue";

test("MdiTableSearch snapshot", () => {
  const wrapper = mount(MdiTableSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
