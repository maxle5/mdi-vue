
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContainStart from "../../src/components/MdiContainStart.vue";

test("MdiContainStart snapshot", () => {
  const wrapper = mount(MdiContainStart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
