
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCircleOutline from "../../src/components/MdiBellCircleOutline.vue";

test("MdiBellCircleOutline snapshot", () => {
  const wrapper = mount(MdiBellCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
