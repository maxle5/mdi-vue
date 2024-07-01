
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieCog from "../../src/components/MdiCookieCog.vue";

test("MdiCookieCog snapshot", () => {
  const wrapper = mount(MdiCookieCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
