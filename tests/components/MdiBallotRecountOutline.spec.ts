
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBallotRecountOutline from "../../src/components/MdiBallotRecountOutline.vue";

test("MdiBallotRecountOutline snapshot", () => {
  const wrapper = mount(MdiBallotRecountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
