
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLadder from "../../src/components/MdiLadder.vue";

test("MdiLadder snapshot", () => {
  const wrapper = mount(MdiLadder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
