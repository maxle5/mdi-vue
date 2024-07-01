
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountFilter from "../../src/components/MdiAccountFilter.vue";

test("MdiAccountFilter snapshot", () => {
  const wrapper = mount(MdiAccountFilter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
