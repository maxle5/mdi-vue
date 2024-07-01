
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUbuntu from "../../src/components/MdiUbuntu.vue";

test("MdiUbuntu snapshot", () => {
  const wrapper = mount(MdiUbuntu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
