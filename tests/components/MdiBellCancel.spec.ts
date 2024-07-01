
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCancel from "../../src/components/MdiBellCancel.vue";

test("MdiBellCancel snapshot", () => {
  const wrapper = mount(MdiBellCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
