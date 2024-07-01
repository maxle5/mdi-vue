
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrophyBroken from "../../src/components/MdiTrophyBroken.vue";

test("MdiTrophyBroken snapshot", () => {
  const wrapper = mount(MdiTrophyBroken, {});
  expect(wrapper.html()).toMatchSnapshot();
});
