
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanQueue from "../../src/components/MdiHumanQueue.vue";

test("MdiHumanQueue snapshot", () => {
  const wrapper = mount(MdiHumanQueue, {});
  expect(wrapper.html()).toMatchSnapshot();
});
