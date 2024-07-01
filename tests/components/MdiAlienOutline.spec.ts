
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlienOutline from "../../src/components/MdiAlienOutline.vue";

test("MdiAlienOutline snapshot", () => {
  const wrapper = mount(MdiAlienOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
