
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCancelOutline from "../../src/components/MdiBellCancelOutline.vue";

test("MdiBellCancelOutline snapshot", () => {
  const wrapper = mount(MdiBellCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
