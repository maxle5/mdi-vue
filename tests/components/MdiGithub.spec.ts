
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGithub from "../../src/components/MdiGithub.vue";

test("MdiGithub snapshot", () => {
  const wrapper = mount(MdiGithub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
