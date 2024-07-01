
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChairSchool from "../../src/components/MdiChairSchool.vue";

test("MdiChairSchool snapshot", () => {
  const wrapper = mount(MdiChairSchool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
