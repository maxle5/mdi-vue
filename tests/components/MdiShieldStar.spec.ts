
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldStar from "../../src/components/MdiShieldStar.vue";

test("MdiShieldStar snapshot", () => {
  const wrapper = mount(MdiShieldStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
