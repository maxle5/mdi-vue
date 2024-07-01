
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodApple from "../../src/components/MdiFoodApple.vue";

test("MdiFoodApple snapshot", () => {
  const wrapper = mount(MdiFoodApple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
