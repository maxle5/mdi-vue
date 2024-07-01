
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShaker from "../../src/components/MdiShaker.vue";

test("MdiShaker snapshot", () => {
  const wrapper = mount(MdiShaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
