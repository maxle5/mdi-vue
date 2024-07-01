
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartSearch from "../../src/components/MdiHeartSearch.vue";

test("MdiHeartSearch snapshot", () => {
  const wrapper = mount(MdiHeartSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
