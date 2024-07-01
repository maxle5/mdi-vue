
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTurtle from "../../src/components/MdiTurtle.vue";

test("MdiTurtle snapshot", () => {
  const wrapper = mount(MdiTurtle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
