
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVoteOutline from "../../src/components/MdiVoteOutline.vue";

test("MdiVoteOutline snapshot", () => {
  const wrapper = mount(MdiVoteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
