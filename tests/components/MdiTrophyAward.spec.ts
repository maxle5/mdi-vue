
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrophyAward from "../../src/components/MdiTrophyAward.vue";

test("MdiTrophyAward snapshot", () => {
  const wrapper = mount(MdiTrophyAward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
