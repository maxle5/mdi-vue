
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsHexagon from "../../src/components/MdiDotsHexagon.vue";

test("MdiDotsHexagon snapshot", () => {
  const wrapper = mount(MdiDotsHexagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
