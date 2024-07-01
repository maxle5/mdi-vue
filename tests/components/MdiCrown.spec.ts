
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrown from "../../src/components/MdiCrown.vue";

test("MdiCrown snapshot", () => {
  const wrapper = mount(MdiCrown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
