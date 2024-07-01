
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowlOutline from "../../src/components/MdiBowlOutline.vue";

test("MdiBowlOutline snapshot", () => {
  const wrapper = mount(MdiBowlOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
