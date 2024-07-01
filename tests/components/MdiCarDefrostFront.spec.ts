
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarDefrostFront from "../../src/components/MdiCarDefrostFront.vue";

test("MdiCarDefrostFront snapshot", () => {
  const wrapper = mount(MdiCarDefrostFront, {});
  expect(wrapper.html()).toMatchSnapshot();
});
