
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugPauseOutline from "../../src/components/MdiBugPauseOutline.vue";

test("MdiBugPauseOutline snapshot", () => {
  const wrapper = mount(MdiBugPauseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
