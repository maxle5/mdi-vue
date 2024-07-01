
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockQuestion from "../../src/components/MdiLockQuestion.vue";

test("MdiLockQuestion snapshot", () => {
  const wrapper = mount(MdiLockQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
