
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuriganaVertical from "../../src/components/MdiFuriganaVertical.vue";

test("MdiFuriganaVertical snapshot", () => {
  const wrapper = mount(MdiFuriganaVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
