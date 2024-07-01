
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHistory from "../../src/components/MdiHistory.vue";

test("MdiHistory snapshot", () => {
  const wrapper = mount(MdiHistory, {});
  expect(wrapper.html()).toMatchSnapshot();
});
