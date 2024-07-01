
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedKingOutline from "../../src/components/MdiBedKingOutline.vue";

test("MdiBedKingOutline snapshot", () => {
  const wrapper = mount(MdiBedKingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
