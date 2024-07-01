
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVote from "../../src/components/MdiVote.vue";

test("MdiVote snapshot", () => {
  const wrapper = mount(MdiVote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
