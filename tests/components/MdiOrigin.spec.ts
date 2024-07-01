
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrigin from "../../src/components/MdiOrigin.vue";

test("MdiOrigin snapshot", () => {
  const wrapper = mount(MdiOrigin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
