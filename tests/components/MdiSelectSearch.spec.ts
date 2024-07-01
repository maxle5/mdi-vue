
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectSearch from "../../src/components/MdiSelectSearch.vue";

test("MdiSelectSearch snapshot", () => {
  const wrapper = mount(MdiSelectSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
