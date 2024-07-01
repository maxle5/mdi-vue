
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetGreek from "../../src/components/MdiAlphabetGreek.vue";

test("MdiAlphabetGreek snapshot", () => {
  const wrapper = mount(MdiAlphabetGreek, {});
  expect(wrapper.html()).toMatchSnapshot();
});
