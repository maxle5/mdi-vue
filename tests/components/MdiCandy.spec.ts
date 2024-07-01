
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandy from "../../src/components/MdiCandy.vue";

test("MdiCandy snapshot", () => {
  const wrapper = mount(MdiCandy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
