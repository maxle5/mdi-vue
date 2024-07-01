
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceManProfile from "../../src/components/MdiFaceManProfile.vue";

test("MdiFaceManProfile snapshot", () => {
  const wrapper = mount(MdiFaceManProfile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
