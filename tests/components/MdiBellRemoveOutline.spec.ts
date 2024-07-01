
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellRemoveOutline from "../../src/components/MdiBellRemoveOutline.vue";

test("MdiBellRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBellRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
