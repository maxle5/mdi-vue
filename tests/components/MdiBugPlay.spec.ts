
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugPlay from "../../src/components/MdiBugPlay.vue";

test("MdiBugPlay snapshot", () => {
  const wrapper = mount(MdiBugPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
