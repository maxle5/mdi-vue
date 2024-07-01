
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickSearch from "../../src/components/MdiToyBrickSearch.vue";

test("MdiToyBrickSearch snapshot", () => {
  const wrapper = mount(MdiToyBrickSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
