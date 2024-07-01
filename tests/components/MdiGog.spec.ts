
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGog from "../../src/components/MdiGog.vue";

test("MdiGog snapshot", () => {
  const wrapper = mount(MdiGog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
