
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyBuggyOff from "../../src/components/MdiBabyBuggyOff.vue";

test("MdiBabyBuggyOff snapshot", () => {
  const wrapper = mount(MdiBabyBuggyOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
