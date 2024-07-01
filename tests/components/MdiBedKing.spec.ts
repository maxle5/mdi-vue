
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedKing from "../../src/components/MdiBedKing.vue";

test("MdiBedKing snapshot", () => {
  const wrapper = mount(MdiBedKing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
