
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceAgent from "../../src/components/MdiFaceAgent.vue";

test("MdiFaceAgent snapshot", () => {
  const wrapper = mount(MdiFaceAgent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
