
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTsunami from "../../src/components/MdiTsunami.vue";

test("MdiTsunami snapshot", () => {
  const wrapper = mount(MdiTsunami, {});
  expect(wrapper.html()).toMatchSnapshot();
});
