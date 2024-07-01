
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGit from "../../src/components/MdiGit.vue";

test("MdiGit snapshot", () => {
  const wrapper = mount(MdiGit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
