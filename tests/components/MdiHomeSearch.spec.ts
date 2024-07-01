
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSearch from "../../src/components/MdiHomeSearch.vue";

test("MdiHomeSearch snapshot", () => {
  const wrapper = mount(MdiHomeSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
