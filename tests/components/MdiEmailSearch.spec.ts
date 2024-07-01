
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailSearch from "../../src/components/MdiEmailSearch.vue";

test("MdiEmailSearch snapshot", () => {
  const wrapper = mount(MdiEmailSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
