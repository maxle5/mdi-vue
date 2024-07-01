
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSnake from "../../src/components/MdiSnake.vue";

test("MdiSnake snapshot", () => {
  const wrapper = mount(MdiSnake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
