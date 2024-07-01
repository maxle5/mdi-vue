
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGitlab from "../../src/components/MdiGitlab.vue";

test("MdiGitlab snapshot", () => {
  const wrapper = mount(MdiGitlab, {});
  expect(wrapper.html()).toMatchSnapshot();
});
