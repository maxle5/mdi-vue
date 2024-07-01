
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellRing from "../../src/components/MdiBellRing.vue";

test("MdiBellRing snapshot", () => {
  const wrapper = mount(MdiBellRing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
