
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStairs from "../../src/components/MdiStairs.vue";

test("MdiStairs snapshot", () => {
  const wrapper = mount(MdiStairs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
