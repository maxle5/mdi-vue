
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward30 from "../../src/components/MdiFastForward30.vue";

test("MdiFastForward30 snapshot", () => {
  const wrapper = mount(MdiFastForward30, {});
  expect(wrapper.html()).toMatchSnapshot();
});
