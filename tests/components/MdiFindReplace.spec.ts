
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFindReplace from "../../src/components/MdiFindReplace.vue";

test("MdiFindReplace snapshot", () => {
  const wrapper = mount(MdiFindReplace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
