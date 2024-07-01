
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStateMachine from "../../src/components/MdiStateMachine.vue";

test("MdiStateMachine snapshot", () => {
  const wrapper = mount(MdiStateMachine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
