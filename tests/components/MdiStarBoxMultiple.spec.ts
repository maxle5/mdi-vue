
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarBoxMultiple from "../../src/components/MdiStarBoxMultiple.vue";

test("MdiStarBoxMultiple snapshot", () => {
  const wrapper = mount(MdiStarBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
