
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieLockOutline from "../../src/components/MdiCookieLockOutline.vue";

test("MdiCookieLockOutline snapshot", () => {
  const wrapper = mount(MdiCookieLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
