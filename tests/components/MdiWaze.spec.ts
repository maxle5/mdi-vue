
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaze from "../../src/components/MdiWaze.vue";

test("MdiWaze snapshot", () => {
  const wrapper = mount(MdiWaze, {});
  expect(wrapper.html()).toMatchSnapshot();
});
