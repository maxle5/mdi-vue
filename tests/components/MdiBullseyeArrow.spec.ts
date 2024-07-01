
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullseyeArrow from "../../src/components/MdiBullseyeArrow.vue";

test("MdiBullseyeArrow snapshot", () => {
  const wrapper = mount(MdiBullseyeArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
