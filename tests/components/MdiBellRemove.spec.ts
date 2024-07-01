
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellRemove from "../../src/components/MdiBellRemove.vue";

test("MdiBellRemove snapshot", () => {
  const wrapper = mount(MdiBellRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
