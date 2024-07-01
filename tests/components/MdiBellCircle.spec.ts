
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCircle from "../../src/components/MdiBellCircle.vue";

test("MdiBellCircle snapshot", () => {
  const wrapper = mount(MdiBellCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
