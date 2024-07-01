
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBallotOutline from "../../src/components/MdiBallotOutline.vue";

test("MdiBallotOutline snapshot", () => {
  const wrapper = mount(MdiBallotOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
