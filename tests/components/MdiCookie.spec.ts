
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookie from "../../src/components/MdiCookie.vue";

test("MdiCookie snapshot", () => {
  const wrapper = mount(MdiCookie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
