
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowlMix from "../../src/components/MdiBowlMix.vue";

test("MdiBowlMix snapshot", () => {
  const wrapper = mount(MdiBowlMix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
