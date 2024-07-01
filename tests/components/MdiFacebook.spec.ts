
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFacebook from "../../src/components/MdiFacebook.vue";

test("MdiFacebook snapshot", () => {
  const wrapper = mount(MdiFacebook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
