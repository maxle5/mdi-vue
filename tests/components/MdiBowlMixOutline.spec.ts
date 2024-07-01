
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowlMixOutline from "../../src/components/MdiBowlMixOutline.vue";

test("MdiBowlMixOutline snapshot", () => {
  const wrapper = mount(MdiBowlMixOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
