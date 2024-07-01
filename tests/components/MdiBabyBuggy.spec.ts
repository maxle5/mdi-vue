
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabyBuggy from "../../src/components/MdiBabyBuggy.vue";

test("MdiBabyBuggy snapshot", () => {
  const wrapper = mount(MdiBabyBuggy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
