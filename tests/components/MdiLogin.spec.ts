
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLogin from "../../src/components/MdiLogin.vue";

test("MdiLogin snapshot", () => {
  const wrapper = mount(MdiLogin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
