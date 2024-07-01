
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrangeBringToFront from "../../src/components/MdiArrangeBringToFront.vue";

test("MdiArrangeBringToFront snapshot", () => {
  const wrapper = mount(MdiArrangeBringToFront, {});
  expect(wrapper.html()).toMatchSnapshot();
});
