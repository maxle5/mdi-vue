
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWall from "../../src/components/MdiWall.vue";

test("MdiWall snapshot", () => {
  const wrapper = mount(MdiWall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
